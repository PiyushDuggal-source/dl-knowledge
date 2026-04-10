#!/bin/bash
# post-build.sh
# Copies raw markdown files to the public directory so they are accessible via URL

echo "🚀 Mirroring raw Markdown files to public directory..."

# Resolve the absolute path of the content directory (following symlinks)
CONTENT_DIR=$(readlink -f content)

# Copy all .md files to public, preserving directory structure
# We use find on the resolved directory to ensure we get all files
cd "$CONTENT_DIR"
find . -name "*.md" | while read -r file; do
    dest="../wiki-site/public/${file#./}"
    mkdir -p "$(dirname "$dest")"
    cp "$file" "$dest"
    echo "  Copied: $file -> $dest"
done

echo "✅ Raw Markdown mirror complete."
