---
title: Loss Functions
type: concept
up: "[[index]]"
down: "[[Gradient_Descent]]"
related: ["[[Gradient_Descent]]", "[[Sigmoid_Neuron]]", "[[Multi_Layer_Perceptrons]]"]
tags: [concepts, optimization, learning]
last_updated: 2026-04-10
llm_summary: A loss function measures the discrepancy between predicted values (y_hat) and true labels (y). Common choices include Mean Squared Error (MSE) for regression and Cross-Entropy for classification.
---

# Loss Functions

## Level 1: One-Sentence Summary
Loss functions define the objective for optimization by measuring the error of a model's predictions.

## Level 2: Intuition
If Gradient Descent is the engine of learning, the loss function is the fuel; it provides the signal for how far off the target we are and in which direction to move.

## Compiled Truth

A **Loss Function** (or objective function) measures the discrepancy between the network's prediction $\hat{y}$ and the true label $y$. The goal of training is to find parameters that minimize this loss.

### Common Loss Functions

| Problem Type | Output Activation | Recommended Loss |
| :--- | :--- | :--- |
| **Regression** | Linear | **Squared Error Loss** |
| **Classification** | Softmax | **Cross-Entropy Loss** |

#### 1. Squared Error Loss (MSE)
Commonly used for regression tasks where the output is a real value.
$$ L(\theta) = \frac{1}{2} \sum (\hat{y}_i - y_i)^2 $$

#### 2. Cross-Entropy Loss
Used for multi-class classification. It measures the difference between two probability distributions (the true one-hot vector and the predicted softmax output).
$$ L(\theta) = -\sum_{c=1}^k y_c \log \hat{y}_c $$
For a single correct label $\ell$:
$$ L(\theta) = -\log \hat{y}_\ell $$

---

## Timeline (Evidence Trail)
- 2026-04-10: Initial synthesis from [extracted/week-3/content.md](../../extracted/week-3/content.md) (Module 4.3).
- 2026-04-10: Documented the mapping between problem type, activation, and loss.
