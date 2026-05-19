---
title: How It Works
description: Technical architecture of the Kernel simulation engine
---

## Architecture

Kernel runs entirely in the browser. The simulation core is written in Rust and compiled to WebAssembly for high performance. The visualization layer uses Three.js for real-time rendering.

```mermaid
graph TB
    subgraph Browser
        WASM[Simulation Core<br/>Rust → WASM] -->|shared buffer| VIZ[Visualization<br/>TS + Three.js]
        VIZ -->|parameters| WASM
        TOML[TOML Configs] --> WASM
    end
```

## Per-Frame Data Flow

```mermaid
sequenceDiagram
    participant JS as JavaScript
    participant WASM as Rust/WASM
    participant GPU as WebGL

    JS->>WASM: step(dt)
    WASM->>WASM: spatial hash → behaviors → movement → signals → energy
    WASM-->>JS: positions buffer (shared memory)
    JS->>GPU: update InstancedMesh + DataTexture
    GPU->>GPU: render frame
```

## Key Systems

| System | Role |
|--------|------|
| **Spatial Hash** | O(1) neighbor queries for agent interaction |
| **Boids Engine** | Flocking via separation, alignment, cohesion |
| **Signal Grid** | Pheromone deposition, diffusion, evaporation |
| **Energy System** | Birth, death, mutation based on energy flow |
| **Forager AI** | 3-sensor chemotaxis (Physarum-inspired) |
| **Kill Ring** | Predator hunting with cooldown mechanics |

## Agent Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Spawn
    Spawn --> Perceive
    Perceive --> Decide
    Decide --> Act
    Act --> Signal
    Signal --> EnergyCheck
    EnergyCheck --> Perceive: alive
    EnergyCheck --> Reproduce: energy ≥ threshold
    EnergyCheck --> Mutate: fitness threshold
    EnergyCheck --> Death: energy ≤ 0 or random
    Reproduce --> Perceive
    Mutate --> Perceive
    Death --> [*]
```

## Config-Driven Experiments

New experiments are defined as TOML files — no code changes needed:

```toml
[experiment]
name = "Multi-Species Ecosystem"

[[species]]
name = "prey"
count = 1000
behavior = "boids+forager"
max_speed = 2.0

[[species]]
name = "predator"
count = 10
behavior = "predator"
max_speed = 2.8
```
