---
title: Multi-Layer Perceptron (MLP)
type: architecture
up: "[[index]]"
down: "[[Feed_Forward_Neural_Networks]]"
related: ["[[Perceptron_Learning]]", "[[Sigmoid_Neuron]]", "[[Feed_Forward_Neural_Networks]]"]
tags: [architectures, history, model]
last_updated: 2026-04-10
llm_summary: An MLP is a feed-forward network with hidden layers that can represent non-linearly separable functions like XOR. It demonstrates that combining simple linear threshold units can solve complex problems.
---

# Multi-Layer Perceptron (MLP)

## Level 1: One-Sentence Summary
The Multi-Layer Perceptron is a layered architecture of neurons that overcomes linear separability constraints by using hidden layers for feature composition.

## Level 2: Intuition
If a single perceptron is like a single line, an MLP is like combining multiple lines to form a complex boundary, enabling the network to 'see' patterns that aren't linearly separable.

## Compiled Truth

The **Multi-Layer Perceptron (MLP)** is a feed-forward network of artificial neurons arranged in layers. It was developed to overcome the fundamental limitation of single perceptrons: the inability to represent functions that are not linearly separable (e.g., XOR).

### Architecture
An MLP typically consists of three types of layers:
- **Input Layer**: Receives raw data features ($x_1, \dots, x_n$).
- **Hidden Layer(s)**: One or more layers of neurons that perform non-linear transformations.
- **Output Layer**: Produces the final prediction ($y$).

![MLP Architecture](../extracted/week-1/artifacts/images/figure_56.png)
*Source: Week 1 Slides, Module 2.8*

### Solving non-linearly separable problems (XOR)
A single perceptron cannot separate the XOR function. However, a hidden layer of perceptrons can be used to "detect" specific input patterns. By combining the outputs of these hidden units, the network can define non-linear decision boundaries.

![Solving XOR](../extracted/week-1/artifacts/images/figure_64.png)
*Source: Week 1 Slides, Module 2.8*

### Representation Power
**Theorem**: Any boolean function of $n$ inputs can be represented exactly by an MLP with a single hidden layer containing $2^n$ perceptrons and one output perceptron.

![Representation Power Theorem](../extracted/week-1/artifacts/formulas/formula_35.png)
> **LLM LaTeX Fallback:** \text{Any boolean function } f: \{0,1\}^n \to \{0,1\} \text{ can be represented by a hidden layer of } 2^n \text{ neurons.}
*Source: Week 1 Slides, Module 2.8*

- **Note**: While $2^n$ neurons are *sufficient*, it is often inefficient as the number of perceptrons grows exponentially with $n$. Deep networks (multiple layers) are often used to reduce this complexity.

---

## Timeline (Evidence Trail)
- 2026-04-10: Initial synthesis from [extracted/week-1/content.md](../../extracted/week-1/content.md) (Module 2.7 - 2.8).
- 2026-04-10: Documented the XOR contradiction and hidden layer solution logic.
