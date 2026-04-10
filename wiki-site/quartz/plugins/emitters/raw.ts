import { FilePath, joinSegments, slugifyFilePath } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import path from "path"
import fs from "fs"
import { glob } from "../../util/glob"
import { Argv } from "../../util/ctx"
import { QuartzConfig } from "../../cfg"

const filesToCopy = async (argv: Argv, cfg: QuartzConfig) => {
  // glob all MD files in content folder and copy them over
  return await glob("**/*.md", argv.directory, cfg.configuration.ignorePatterns)
}

const copyFile = async (argv: Argv, fp: FilePath) => {
  const src = joinSegments(argv.directory, fp) as FilePath
  
  // We want to keep the .md extension but slugify the path parts
  const dir = path.dirname(fp)
  const ext = path.extname(fp)
  const base = path.basename(fp, ext)
  
  // Create a destination path that preserves the .md extension
  // Quartz's slugify might strip .md, so we handle it carefully
  const dest = joinSegments(argv.output, fp) as FilePath

  // ensure dir exists
  const destDir = path.dirname(dest) as FilePath
  await fs.promises.mkdir(destDir, { recursive: true })

  await fs.promises.copyFile(src, dest)
  return dest
}

export const RawMarkdown: QuartzEmitterPlugin = () => {
  return {
    name: "RawMarkdown",
    async *emit({ argv, cfg }) {
      const fps = await filesToCopy(argv, cfg)
      for (const fp of fps) {
        yield copyFile(argv, fp)
      }
    },
  }
}
