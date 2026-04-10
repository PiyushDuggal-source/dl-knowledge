---
title: Backpropagation
type: algorithm
up: "[[Optimization]]"
down: ["[[Chain_Rule]]", "[[Gradient_Descent]]"]
related: ["[[Loss_Functions]]", "[[Feed_Forward_Neural_Networks]]"]
llm_summary: Efficient algorithm for computing loss gradients w.r.t parameters using the Chain Rule.
last_updated: 2026-04-10
---

# Backpropagation

## Compiled Truth

### Level 1: One-Sentence Summary
Backpropagation is an efficient implementation of the Chain Rule used to calculate the gradient of a loss function with respect to every weight and bias in a neural network.

### Level 2: Intuition (The "Responsibility" Framework)
The algorithm assigns "responsibility" for the final output error to individual weights by working backward from the output layer to the input layer. It asks: *"If I change this weight by a tiny amount, how much does it change the final loss?"*

![Backpropagation Intuition](../extracted/week-3/artifacts/images/figure_22.png)
> **LLM LaTeX Fallback:** $\frac{\partial L}{\partial w_{ij}^k} = \frac{\partial L}{\partial a_i^k} \cdot \frac{\partial a_i^k}{\partial w_{ij}^k}$

### Level 3: Mathematical Derivations

#### 1. Output Gradient ($\mathbf{a}^L$)
For Cross-Entropy loss and Softmax:
$$ \nabla_{\mathbf{a}^L} L = -(\mathbf{e}_y - \hat{\mathbf{y}}) $$
![Output Gradient](../extracted/week-3/artifacts/formulas/formula_45.png)
> **LLM LaTeX Fallback:** $\delta^L = \hat{y} - y$

#### 2. Hidden Unit Gradient ($\mathbf{h}^k$)
$$ \nabla_{\mathbf{h}^k} L = (W^{k+1})^T \nabla_{\mathbf{a}^{k+1}} L $$
![Hidden Unit Gradient](../extracted/week-3/artifacts/formulas/formula_56.png)
> **LLM LaTeX Fallback:** $\frac{\partial L}{\partial h^k} = (W^{k+1})^T \delta^{k+1}$

#### 3. Pre-activation Gradient ($\mathbf{a}^k$)
$$ \nabla_{\mathbf{a}^k} L = (\nabla_{\mathbf{h}^k} L) \odot g'(\mathbf{a}^k) $$
![Pre-activation Gradient](../extracted/week-3/artifacts/formulas/formula_62.png)
> **LLM LaTeX Fallback:** $\delta^k = \frac{\partial L}{\partial h^k} \odot \sigma'(a^k)$

---

## Timeline (Evidence Trail)
- 2026-04-10: Initial synthesis from [extracted/week-3/content.md](../../extracted/week-3/content.md).
- 2026-04-10: Added LLM Frontmatter and LaTeX fallbacks for agent compatibility.
