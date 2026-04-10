---
title: Feed-Forward Neural Networks (FFNN)
type: architecture
up: "[[index]]"
down: "[[Backpropagation]]"
related: ["[[Multi_Layer_Perceptrons]]", "[[Gradient_Descent]]", "[[Backpropagation]]"]
tags: [architectures, model, deep-learning]
last_updated: 2026-04-10
llm_summary: An architecture where information flows from the input through hidden layers to the output in a single direction. Each layer consists of a linear pre-activation step followed by a non-linear activation transformation.
---

# Feed-Forward Neural Networks (FFNN)

## Level 1: One-Sentence Summary
Feed-Forward Neural Networks are layered architectures where information is transformed sequentially through a chain of pre-activation and activation functions.

## Level 2: Intuition
Think of it as a factory production line; each station (layer) takes the previous's work, adds its own touch (weights/biases), and passes it on until the final product (prediction) is ready.

## Compiled Truth

A **Feed-Forward Neural Network** (also known as a Multilayered Network of Neurons) is an architecture where information flows in one direction: from the input layer, through multiple hidden layers, to the output layer.

### Layer Components
Each layer $k$ consists of neurons that perform two distinct operations:
1. **Pre-activation ($a^k$)**: A weighted sum of the previous layer's activations plus a bias.
2. **Activation ($h^k$)**: An element-wise non-linear transformation applied to the pre-activation.

![Forward Pass Notation](../extracted/week-3/artifacts/images/figure_4.png)
> **LLM LaTeX Fallback:** \mathbf{h}^{k-1} \xrightarrow{W^k, \mathbf{b}^k} \mathbf{a}^k \xrightarrow{g} \mathbf{h}^k
*Source: Week 3 Slides, Module 4.1*

### Mathematical Formulation
For a layer $k$:
- **Pre-activation**:
  $$ \mathbf{a}^k = W^k \mathbf{h}^{k-1} + \mathbf{b}^k $$
  ![Pre-activation Equation](../extracted/week-3/artifacts/formulas/formula_1.png)
  > **LLM LaTeX Fallback:** \mathbf{a}^k = W^k \mathbf{h}^{k-1} + \mathbf{b}^k
- **Activation**:
  $$ \mathbf{h}^k = g(\mathbf{a}^k) $$
  ![Activation Equation](../extracted/week-3/artifacts/formulas/formula_2.png)
  > **LLM LaTeX Fallback:** \mathbf{h}^k = g(\mathbf{a}^k)

Where:
- $W^k$: Weight matrix between layer $k-1$ and $k$.
- $\mathbf{b}^k$: Bias vector for layer $k$.
- $g$: Activation function (e.g., Sigmoid, Tanh, ReLU).

### Output Layer
The final layer $L$ uses an output activation function $O$ (e.g., Softmax for classification or Linear for regression) to produce the prediction $\hat{\mathbf{y}}$.

---

## Timeline (Evidence Trail)
- 2026-04-10: Initial synthesis from [extracted/week-3/content.md](../../extracted/week-3/content.md) (Module 4.1).
- 2026-04-10: Standardized notation for pre-activations ($a$) and activations ($h$).
