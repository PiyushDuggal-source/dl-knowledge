---
title: Sigmoid Neuron
type: concept
up: "[[index]]"
down: "[[Gradient_Descent]]"
related: ["[[McCulloch_Pitts_Neuron]]", "[[Perceptron_Learning]]", "[[Gradient_Descent]]"]
tags: [concepts, model, activation]
last_updated: 2026-04-10
llm_summary: An extension of the perceptron with a smooth, continuous, and differentiable logistic activation function. It allows for a gradual change in output and probabilistic interpretation of its values.
---

# Sigmoid Neuron

## Level 1: One-Sentence Summary
The Sigmoid Neuron replaces the discrete step function with a smooth logistic function to enable gradient-based learning.

## Level 2: Intuition
Instead of just being 'on' or 'off', a sigmoid neuron can be 'mostly on' or 'slightly off', giving us a more nuanced, probabilistic view of the data.

## Compiled Truth

The **Sigmoid Neuron** is a foundational building block in modern neural networks. It addresses the "harshness" of the perceptron's step function by introducing a smooth, continuous, and differentiable activation function.

### Motivation
In a perceptron, a tiny change in input can lead to a complete reversal of the decision (from $0$ to $1$). This is often undesirable in real-world applications where we expect a gradual change in response.

### Mathematical Formulation
The sigmoid neuron applies the **Logistic Function** to the weighted sum of its inputs:

![Logistic Function](../extracted/week-2/artifacts/formulas/formula_2.png)
> **LLM LaTeX Fallback:** \hat{y} = \sigma(z) = \frac{1}{1 + e^{-z}} \text{ where } z = \mathbf{w}^T\mathbf{x} + b
*Source: Week 2 Slides, Module 3.1*

$$ \hat{y} = \sigma(\mathbf{w}^T\mathbf{x} + b) = \frac{1}{1 + e^{-(\mathbf{w}^T\mathbf{x} + b)}} $$

### Key Characteristics
- **Smoothness**: The output changes gradually, not abruptly.
- **Probabilistic Output**: The output is a real value in the range $(0, 1)$, which can be interpreted as the probability of the input belonging to a certain class.
- **Differentiability**: Unlike the step function, the sigmoid is differentiable everywhere. This is a critical prerequisite for **Gradient Descent**.

![Smooth vs Harsh](../extracted/week-2/artifacts/images/figure_11.png)
*Source: Week 2 Slides, Module 3.1*

---

## Timeline (Evidence Trail)
- 2026-04-10: Initial synthesis from [extracted/week-2/content.md](../../extracted/week-2/content.md) (Module 3.1).
- 2026-04-10: Documented the transition from discrete logic to probabilistic modeling.
