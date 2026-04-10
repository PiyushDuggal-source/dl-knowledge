---
title: Perceptron Learning Algorithm
type: algorithm
up: "[[index]]"
down: "[[Multi_Layer_Perceptrons]]"
related: ["[[McCulloch_Pitts_Neuron]]", "[[Gradient_Descent]]"]
tags: [algorithms, learning, optimization]
last_updated: 2026-04-10
llm_summary: An iterative weight adjustment algorithm (PLA) for finding a separating hyperplane between two linearly separable classes. The rule adds or subtracts the input vector from the weight vector for misclassified points.
---

# Perceptron Learning Algorithm (PLA)

## Level 1: One-Sentence Summary
The Perceptron Learning Algorithm is a supervised learning rule that iteratively updates weights for misclassified points until a linear decision boundary is found.

## Level 2: Intuition
Imagine the weight vector $\mathbf{w}$ as a compass; if a positive point is misclassified, we pull $\mathbf{w}$ toward that point to include it on the 'positive' side of the boundary.

## Compiled Truth

Proposed by Frank Rosenblatt in 1958, the Perceptron is an extension of the McCulloch-Pitts neuron with **learnable weights and biases**. The Perceptron Learning Algorithm (PLA) is a supervised learning procedure for finding these weights.

### The Model
The output $y$ is computed as:
$$ y = 
\begin{cases} 
1 & \text{if } \sum_{i=1}^n w_i x_i + w_0 \geq 0 \\
0 & \text{if } \sum_{i=1}^n w_i x_i + w_0 < 0 
\end{cases} $$
where $w_0$ is the **Bias**, representing the prior or prejudice of the model.

### The Learning Rule
The algorithm iteratively adjusts weights for misclassified points.

![Update Rule](../extracted/week-1/artifacts/formulas/formula_14.png)
> **LLM LaTeX Fallback:** \mathbf{w}_{new} = \mathbf{w}_{old} \pm \mathbf{x}_i
*Source: Week 1 Slides, Module 2.5*

- **Case 1: $y=1$ but $\hat{y}=0$** (Positive point misclassified): 
  $$ \mathbf{w}_{new} = \mathbf{w}_{old} + \mathbf{x} $$
- **Case 2: $y=0$ but $\hat{y}=1$** (Negative point misclassified): 
  $$ \mathbf{w}_{new} = \mathbf{w}_{old} - \mathbf{x} $$

### Geometric Intuition
The weight vector $\mathbf{w}$ is perpendicular to the decision boundary. 
- For a **positive point** misclassified, we add $\mathbf{x}$ to $\mathbf{w}$ to reduce the angle between them (making $\cos \alpha$ more positive).
- For a **negative point** misclassified, we subtract $\mathbf{x}$ from $\mathbf{w}$ to increase the angle between them (making $\cos \alpha$ more negative).

![Geometric Intuition](../extracted/week-1/artifacts/formulas/formula_19.png)
> **LLM LaTeX Fallback:** \theta_{new} < \theta_{old} \text{ for positive misclassified point.}
*Source: Week 1 Slides, Module 2.5*

### Convergence Theorem
If the two classes are **linearly separable**, the Perceptron Learning Algorithm is guaranteed to converge to a separating hyperplane in a finite number of steps.

![Convergence Summary](../extracted/week-1/artifacts/formulas/formula_29.png)
> **LLM LaTeX Fallback:** \text{Steps } k \leq \frac{R^2}{\gamma^2} \text{ where } R \text{ is max input norm and } \gamma \text{ is margin.}
*Source: Week 1 Slides, Module 2.6*

---

## Timeline (Evidence Trail)
- 2026-04-10: Initial synthesis from [extracted/week-1/content.md](../../extracted/week-1/content.md) (Modules 2.3 - 2.6).
- 2026-04-10: Integrated update rule logic and geometric half-space intuition.
