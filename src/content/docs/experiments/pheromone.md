---
title: "Experiment 02: Pheromone Paths"
description: Ant-colony-inspired distributed path optimization through chemical signaling
---

## Overview

Agents discover and optimize paths to food sources using pheromone trail communication — no map, no planning, just local chemical signals that self-organize into efficient transport networks.

## How It Works

1. Agents wander, depositing pheromone trails as they move
2. Agents steer toward stronger pheromone concentrations (chemotaxis)
3. Trails diffuse spatially and evaporate over time
4. Frequently-traveled paths get reinforced; unused paths fade
5. Over time, efficient routes emerge connecting food sources

## Biological Analogue

Real ants solve the shortest-path problem collectively:
- Shorter paths get traveled more often → stronger pheromone
- Stronger pheromone attracts more ants → positive feedback
- Evaporation prunes suboptimal routes → negative feedback

The balance of reinforcement and evaporation produces optimal networks.

## Signal Dynamics

```
Deposit:    φ(cell) += strength
Diffusion:  φ' = (1-α)·φ + α·avg(neighbors)
Evaporation: φ *= (1 - ε)
```

Half-life of a signal: t½ ≈ ln(2)/ε

## Physarum-Inspired Sensors

Each agent has three sensors (left, center, right) offset ahead of its heading. It steers toward the sensor reading the highest concentration — mimicking how Physarum polycephalum navigates chemical gradients.
