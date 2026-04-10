---
title: Gradient Descent
type: algorithm
up: "[[index]]"
down: "[[Backpropagation]]"
related: ["[[Sigmoid_Neuron]]", "[[Loss_Functions]]", "[[Backpropagation]]"]
tags: [algorithms, optimization, math]
last_updated: 2026-04-10
llm_summary: An optimization algorithm used to minimize a loss function (MSE) by iteratively updating parameters (w, b) in the opposite direction of the gradient. It is derived from the Taylor series expansion and uses a learning rate eta.
---

# Gradient Descent

## Level 1: One-Sentence Summary
Gradient Descent is a numerical optimization method that iteratively updates weights and biases toward the minimum of an error surface.

## Level 2: Intuition
Imagine being on a foggy mountain and wanting to find the lowest valley; you simply feel which way the ground slopes down and take a step in that direction.

## Compiled Truth

**Gradient Descent** is a principled optimization algorithm used to find the parameters $(w, b)$ that minimize a loss function $L(w, b)$ by traversing an **Error Surface**.

### Intuition
Imagine standing on an error surface where height represents the loss. To find the minimum point, move in the direction of the steepest descent—opposite to the gradient.

### Mathematical Formulation
To guide the algorithm, we define an objective function, typically the **Mean Squared Error (MSE)**:

![MSE Objective](../extracted/week-2/artifacts/formulas/formula_10.png)
> **LLM LaTeX Fallback:** L(w, b) = \frac{1}{2} \sum_{i=1}^n (\hat{y}_i - y_i)^2
*Source: Week 2 Slides, Module 3.2*

$$ L(w, b) = \frac{1}{2} \sum_{i=1}^n (\hat{y}_i - y_i)^2 $$

### Derivation (Taylor Series)
The rule "move opposite to the gradient" is derived from the **Taylor Series expansion** of the loss function. For a small step $\Delta \theta$:
$$ L(\theta + \Delta \theta) \approx L(\theta) + \Delta \theta^T \nabla L(\theta) $$
To ensure the loss decreases ($L(\theta + \Delta \theta) < L(\theta)$), the step $\Delta \theta$ should be in the opposite direction of the gradient $\nabla L(\theta)$.

### The Update Rule
The parameters are updated iteratively using the **Learning Rate ($\eta$)**:

![Update Rule](../extracted/week-2/artifacts/formulas/formula_34.png)
> **LLM LaTeX Fallback:** w = w - \eta \nabla L(w)
*Source: Week 2 Slides, Module 3.4*

$$ w = w - \eta \frac{\partial L}{\partial w} $$
$$ b = b - \eta \frac{\partial L}{\partial b} $$

### Gradient Calculation (for 1 point)
For a single input $x$ and sigmoid output $\hat{y}$:

![Gradient Calculation](../extracted/week-2/artifacts/formulas/formula_44.png)
> **LLM LaTeX Fallback:** \frac{\partial L}{\partial w} = (\hat{y} - y) \cdot \hat{y}(1 - \hat{y}) \cdot x
*Source: Week 2 Slides, Module 3.4*

- $\frac{\partial L}{\partial w} = (\hat{y} - y) \cdot \hat{y}(1 - \hat{y}) \cdot x$
- $\frac{\partial L}{\partial b} = (\hat{y} - y) \cdot \hat{y}(1 - \hat{y})$

---

## Timeline (Evidence Trail)
- 2026-04-10: Initial synthesis from [extracted/week-2/content.md](../../extracted/week-2/content.md) (Module 3.4).
- 2026-04-10: Integrated the Taylor Series proof and MSE objective formulas.
