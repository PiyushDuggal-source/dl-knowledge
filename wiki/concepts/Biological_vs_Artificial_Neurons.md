---
title: Biological vs Artificial Neurons
type: concept
up: "[[index]]"
down: "[[McCulloch_Pitts_Neuron]]"
related: "[[McCulloch_Pitts_Neuron]]"
tags: [foundations, biology]
last_updated: 2026-04-10
llm_summary: Explores the relationship between biological neurons (soma, dendrites, axons) and artificial neurons (inputs, weights, aggregation, activation). Discusses how deep learning mimics the brain's hierarchical information processing.
---

# Biological vs Artificial Neurons

## Level 1: One-Sentence Summary
The artificial neuron is a computational abstraction of the biological neuron's structure, enabling hierarchical feature extraction.

## Level 2: Intuition
Just as the brain uses dendrites to receive signals and axons to transmit them, an artificial neuron weights its inputs and fires based on a threshold, allowing a network to build complex concepts from simple ones.

## Compiled Truth

Artificial Neural Networks (ANNs) are loosely inspired by the structure and function of biological neurons in the human brain. The core goal is to mimic the brain's ability to process information through a massively parallel interconnected network of simple units.

### The Biological Neuron
A biological neuron is a neural processing unit consisting of four primary components:
- **Dendrites**: Receive signals from other neurons.
- **Synapse**: The point of connection between neurons where signal transmission occurs.
- **Soma (Cell Body)**: Processes the incoming information.
- **Axon**: Transmits the processed output to other neurons.

![Biological Neuron](../extracted/week-1/artifacts/images/figure_6.png)
*Source: Week 1 Slides, Module 2.1*

### Hierarchical Processing
In the brain, neurons are arranged in a hierarchy. For example, the visual cortex identifies simple forms like edges and corners in early layers (V1), which are then composed into high-level objects in later layers (AIT).

![Hierarchical Processing](../extracted/week-1/artifacts/images/figure_12.png)
*Source: Week 1 Slides, Module 2.1*

### The Artificial Neuron
The **Artificial Neuron** is the fundamental computational unit of a deep neural network. It simplifies the biological process into:
1. **Inputs ($x_i$)**: Signals from other units.
2. **Weights ($w_i$)**: Representing synaptic strength (importance of each input).
3. **Aggregation Function ($g$)**: Summing the weighted inputs.
4. **Activation Function ($f$)**: Taking a decision based on the aggregation (firing).

---

## Timeline (Evidence Trail)
- 2026-04-10: Initial synthesis from [extracted/week-1/content.md](../../extracted/week-1/content.md) (Module 2.1).
- 2026-04-10: Integrated biological structure and hierarchical processing diagrams.
