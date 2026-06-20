---
title: Notes on RL
date: 2026-06-01
tags: ['blog']
---
# Markov Decision Process (MDP)
when there are multiple subsequent states following one action.
- states **s**
- actions **a**
- Transformation **T(s,a,s')~P(s'|s,a)**, the probability of s transforming to s' after action a.
- Reward **R(s,a,s')**
- Discount **$\gamma \in [0, 1]$**
- start state
- end state
ultility function
$$G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \gamma^3 R_{t+4} + \dots = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

The primary goal for an MDP is to find an optimal policy $\pi^*$ that gives us an action for every state that results in the maximum expected utility(G).

The reward is bounded by the value $\frac{R_{\max}}{1-\gamma}$.

suppose agent can get max reward in each future step, $R_{t+k+1} = R_{\max}$
$$G_t \le \sum_{k=0}^{\infty} \gamma^k R_{\max} = R_{\max} \sum_{k=0}^{\infty} \gamma^k$$
$$1 + \gamma + \gamma^2 + \gamma^3 + \gamma^4 + \dots$$
$\gamma < 1$, $$\sum_{k=0}^{\infty} \gamma^k = \frac{1}{1 - \gamma}$$
thus, $$G_t \le \frac{R_{\max}}{1 - \gamma}$$

in Infinite Horizon MDP, when $\gamma < 1$, total reward <= $\frac{R_{\max}}{1-\gamma}$

## Reward Design / Reward Shaping
> suppose agent can get max reward in each future step, $R_{t+k+1} = R_{\max}$

not all Rmax in each step is the same, however, one enviroment, in all possible time and action/state, there's always a maximum reward.

*like, in an auto-drive system, if the reward of getting to end point is 100, then the reward of every other step can't exceed 100.*

### Intent Alignment / Time Penalty
### Reward Hacking

## Solving MDP
expectancy pruning tree

nodes: 
- states(s), the state where agent is at, but not taking any action, ultimate value  $U^*(s)$
- Q-state(s,a), the state where agent is at, and has taken some action, but not to the next state. $Q^*(s, a)$

### Bellman Equation
$$
U^(s) = \max_a \sum_{s'} T(s, a, s')\times(R(s, a,s') + \gamma U^(s')) = \max_a Q^(s, a)
$$
in state s, there are actions a1, a2, a3, each action has a expect value Q*.
we choose the action where Q* is the max.
$$\text{其中 } Q^(s, a) = \sum_{s'} T(s, a, s') \times \left[ R(s, a, s') + \gamma U^\ast(s') \right]$$
when we take action a, enter the node $Q^\ast(s, a)$, the possibility of transforming from s to s' is $T(s,a,s')$, and the instance we are in state s', we get:
1. instant reward $R(s, a, s')$
2. value of new state itself $U^\ast(s')$, since it's future, $\gamma U^\ast(s')$
the total reward of new state s': $\left[ R(s, a, s') + \gamma U^\ast(s') \right]$

but which new state we will fall into is uncertain, thus we need to plus all reward of new states with $T(s, a, s')$, add up and get a expectation(avg)
$$Q^\ast(s, a) = \sum_{s'} T(s, a, s') \times \left[ R(s, a, s') + \gamma U^\ast(s') \right]$$
The equation creates a dynamic programming problem.
### Value iteration
### Policy iteration
## TD learning
## Q-learning