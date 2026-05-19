---
title: Theory
description: Mathematical foundations of the Kernel simulation
---

## Overview

Kernel's ecosystem simulation is grounded in established mathematical models from swarm intelligence, population dynamics, and reaction-diffusion systems.

For the complete mathematical treatment with proofs, see the [full theory document on GitHub](https://github.com/Unstable-Kernel/kernel/blob/main/docs/theory.md).

## Key Results

### Flock Equilibrium Distance

For agents with separation weight w_s and cohesion weight w_c, the equilibrium inter-agent distance is:

```
d* ≈ r_sep · √(w_s / w_c)
```

### Trail Persistence Condition

A pheromone trail persists when agent density exceeds:

```
ρ_min = ε · φ_threshold / d
```

Where ε = evaporation rate, d = deposition strength.

### Population Boundedness

The predator population is bounded by prey density and kill mechanics:

```
Q_max = prey_density_in_kill_ring × (E_kill / (λ_pred × τ_cooldown))
```

### Signal Half-Life

A pheromone signal decays to half its value in:

```
t_half = ln(2) / ε ≈ 35 ticks (at ε = 0.02)
```

## References

1. Reynolds (1987) — Boids flocking model
2. Dorigo et al. (1996) — Ant Colony Optimization
3. Jones (2010) — Physarum transport networks
4. Lotka (1925) / Volterra (1926) — Population dynamics
5. Tero et al. (2010) — Biologically inspired network design
