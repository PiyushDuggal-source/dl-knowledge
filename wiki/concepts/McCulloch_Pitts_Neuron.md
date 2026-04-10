---
title: McCulloch-Pitts Neuron
type: concept
up: "[[index]]"
down: "[[Perceptron_Learning]]"
related: ["[[Biological_vs_Artificial_Neurons]]", "[[Perceptron_Learning]]", "[[Sigmoid_Neuron]]"]
tags: [foundations, history, model]
last_updated: 2026-04-10
llm_summary: Introduces the MP Neuron (1943), the first simplified computational model of a neuron. It uses binary inputs, thresholding logic, and inhibitory signals to represent boolean functions and linear decision boundaries.
---

# McCulloch-Pitts Neuron (MP Neuron)

## Level 1: One-Sentence Summary
The MP Neuron is a simplified binary threshold unit that can represent linearly separable boolean functions.

## Level 2: Intuition
Think of it as a logical gate with a 'party spoiler' (inhibitory input); it fires only if enough positive signals arrive and no negative signal blocks it entirely.

## Compiled Truth

Proposed in 1943 by Warren McCulloch (neuroscientist) and Walter Pitts (logician), the MP Neuron is a highly simplified computational model of a biological neuron. It was the first model to use **Thresholding Logic** to perform computation.

### Mathematical Formulation
The neuron aggregates binary inputs and makes a decision based on a threshold $\theta$.

![Aggregation and Thresholding](../extracted/week-1/artifacts/formulas/formula_1.png)
> **LLM LaTeX Fallback:** y = 1 \text{ if } \sum x_i \geq \theta, \text{ else } 0
*Source: Week 1 Slides, Module 2.2*

$$ y = f(g(x)) = 
\begin{cases} 
1 & \text{if } \sum x_i \geq \theta \\
0 & \text{if } \sum x_i < \theta 
\end{cases} $$

### Key Features
- **Binary Inputs/Outputs**: All signals are $0$ or $1$.
- **Excitatory vs. Inhibitory**:
    - **Excitatory**: Inputs that contribute toward the threshold.
    - **Inhibitory**: If any inhibitory input is $1$, the output is forced to $0$ regardless of other inputs (the "party spoiler").
- **Fixed Weights**: In the original MP model, all excitatory inputs have an implicit weight of $1$.

![Inhibitory Input](../extracted/week-1/artifacts/images/figure_18.png)
*Source: Week 1 Slides, Module 2.2*

### Geometric Interpretation
A single MP neuron represents a **Linear Decision Boundary**. In 2D, it is a line; in 3D, a plane; and in $n$-D, a hyperplane. 
- All inputs that produce $0$ lie on one side of the hyperplane.
- All inputs that produce $1$ lie on or above the hyperplane.

### Representation Power
The MP neuron can represent boolean functions that are **Linearly Separable** (e.g., AND, OR, NOT). However, it cannot represent functions like XOR with a single unit.

---

## Timeline (Evidence Trail)
- 2026-04-10: Initial synthesis from [extracted/week-1/content.md](../../extracted/week-1/content.md) (Module 2.2).
- 2026-04-10: Documented inhibitory logic and linear separability constraints.
