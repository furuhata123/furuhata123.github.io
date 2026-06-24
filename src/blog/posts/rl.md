---
title: Notes on RL
date: 2026-06-01
tags: ['blog']
---
# Definations
• Agent: 

An entity that **interacts with the environment** by observing states, **taking actions**, and receiving rewards. Its goal is to find an optimal policy that **maximizes the expected cumulative reward** (or long-term return) over time.

• Environment: 

The **external system** with which the agent interacts. It is formally defined by a set of states ($S$), a set of actions ($A$), **transition probabilities ($T$)**, and a **reward function ($R$)**. It responds to the agent's actions and dictates the next state and immediate reward.

• Policy $\pi$：

A **mapping (or function) from states** to actions. It **defines the agent's behavior** by specifying which action $a \in A$ to choose (or the probability distribution over actions) when in a given state $s \in S$. Denoted as **$\pi(s) = a$.**

• Reward

A **scalar feedback signal** returned by the environment after the agent transitions from state $s$ to $s'$ via action $a$. It evaluates the **immediate success** of an action and is represented mathematically as a function **$R(s, a, s')$**.

• State

A formal **representation of the environment** at a specific moment in time. In an MDP, a state must satisfy **the Markov property**, meaning it captures all relevant information from the past such that the future **depends only on the current state**, not on the sequence of past states.

**discount**: the further future expectations get, the less important it is to current state's expectation value. discouting rate(gamma) is [0,1], when it approachs 0, the agent gets more short-sighted

**Regret** is the difference between the maximum possible total reward (under the optimal policy) and the actual accumulated reward obtained by the agent.

<!-- readmore -->

• Transition function

• **Learning rate**: a tuning parameter in an optimization algorithm that determines **the step size** at each iteration while **moving toward a minimum of a loss function**.

• regret

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
the bellman equation:
$$
U^(s) = \max_a \sum_{s'} T(s, a, s')\times(R(s, a,s') + \gamma U^(s')) = \max_a Q^(s, a)
$$
but since there is a Rmax, it's a non-linear equation, thus we can't solve it by matrix. we need to... endlessly(?) plug in, getting closer and closer to the answer.
$$U_{k+1}(s) \leftarrow \max_a \sum_{s'} T(s, a, s') \times \left( R(s, a, s') + \gamma U_k(s') \right)$$


#### Q-value Iteration
$$Q_{k+1}(s,a) = \sum_{s'} T(s, a, s') \times \left( R(s, a, s') + \gamma \max_{a'} Q_k (s', a') \right)$$
in value iteration, we choose action before transition, whereas in Q-value interation, we make a transition before choosing action
> Some values we used:
>1. **G**: a specific value of established fact. $$G = R_1 + \gamma R_2 + \gamma^2 R_3 + \dots$$
>2. U/V: 最微观（落地切片）：知道了终点身价 $U^*(s')$。加上眼前的路费，就拼凑出了具体的单次落点得分：$$U(s, a, s') = R(s, a, s') + \gamma U^*(s')$$，
>3. Q,Q*，中观（悬空动作）：因为有概率，我把所有可能的落点切片 $U(s, a, s')$ 乘上概率求和，得到了悬空动作的身价 $Q^*(s, a)$：$$Q^*(s, a) = \sum_{s'} T(s, a, s') \mathbf{U(s, a, s')}$$
>4. U*:站在房间$s$里，面对眼前的所有动作，直接取个 $\max$，选最棒的那个 $Q^\ast$ 动作，作为我这个房间的终极身价 $U^\ast(s)$：$$U^\ast(s) = \max_a Q^\ast(s, a)$$
>
>从4到2到3，可以开启递归
### Policy iteration
$$\pi_{i+1}(s) = \arg\max_a \sum_{s'} T(s, a, s') [R(s, a, s') + \gamma U^{\pi_i}(s')]$$
---
model-based: using samples to estimate transform function and reward function, and using value/policy iteration to get MDP

model-free: directly estimate value/Q-value of state in MDP, no transform/reward model


## passive RL
adapting one policy, learn state value under this policy
### DE
### TDlearning
#### Monte Carlo (MC) Policy Evaluation
$$ V^\pi(s) \text{ for each state by averaging returns achieved from } s \text{ across all samples}$$

---

Problem with MC policy evaluation: agent has to reach end point get G to update Vs. if the game is infinite or long,
$$V^\pi(s) \leftarrow V^\pi(s) + \alpha \Big( { R(s, \pi(s), s') + \gamma V^\pi(s') } - { V^\pi(s) } \Big)$$
update state value in one step.
${ R(s, \pi(s), s') + \gamma V^\pi(s') }$ is current value, minus past value.

if difference is 0, td error is 0. if reality>past, that means we underestimate this s, **using learning rate alpha to slightly raise the value to the reality**......

learning rate is how much we believe our new experience

Rearrange the equation:
$$
V^\pi(s) \leftarrow (1-\alpha)V^\pi(s) + \alpha[R(s, \pi(s), s') + \gamma V^\pi(s')]
$$
$(1-\alpha)$: how much we preserve old experience

**Exponentially Weighted Moving Average**: since $(1-\alpha) < 1$, it made past memories decrease to 0 quickly.
## active RL: Q-learning
Active reinforcement learning: use feedback to iteratively update policy, eventually learning optimal policy
$$
Q(s, a) \leftarrow (1-\alpha)Q(s,a) + \alpha[R(s, a, s') + \gamma \max_{a'} Q(s', a')]
$$
ACTUALLY THE SAME
# Exploration-Exploitation Dilemma
Exploration（探索）：
去尝试那些未知或者目前看起来不是最优的动作。它的目的是为了收集更多环境的信息，发现可能存在的潜在高奖励。

比喻： 每次去餐厅都点没吃过的菜，虽然有踩雷的风险，但也可能发现新大陆。

Exploitation（利用）：
总是选择当前已知能够带来最高奖励的动作。它的目的是最大化眼前的利益，利用现有的知识。(Local Optimum)

比喻： 每次去餐厅都只点那道最喜欢的招牌菜，绝对稳妥，但也永远不会知道别的菜有多好吃了。

探索函数 $f(Q, N)$
$$f(Q(s,a), N(s,a)) = \begin{cases} R^+ & \text{if } N(s,a) < N_e \\ Q(s,a) & \text{otherwise} \end{cases}$$
- $N(s,a)$：在这个状态 $s$ 下，动作 $a$ 已经被尝试过的总次数。
- $N_e$：一个人为设定的门槛值。意思是：“任何一个选择，至少得试够 $N_e$ 次，才有资格评判它好不好。”
- $R^+$：一个极度乐观的最高奖励预估值（比如给一个超大的正数）。


如果尝试次数不够（$N < N_e$）：探索函数直接返回一个极高的奖励 $R^+$。智能体就会觉得：“这个我还没怎么试过，它一定藏着巨大的宝藏！” 从而被强行吸引过去探索。如果试够了（$N \ge N_e$）：探索函数就回归理性，返回它真正的、客观的 $Q(s,a)$ 值。

“面对不确定性时的乐观主义”（Optimism in the Face of Uncertainty）
## Epsilon-Greedy
最简单也最常用的一种方法。

1. 以 $1 - \epsilon$ 的概率选择当前最优的动作（Exploitation）。
2. 以 $\epsilon$ 的概率随机选择一个动作（Exploration）。
3. 进阶： 通常会让 $\epsilon$ 随着时间衰减（Decay）。刚开始 $\epsilon=1.0$ 全力探索，到后期 $\epsilon$ 趋近于 0，专注于利用。
## Upper Confidence Bound
这是一种“带有乐观色彩”的探索机制。它不仅看一个动作当前的平均奖励，还要看这个动作被尝试的次数。

如果一个动作很少被尝试，它的不确定性（置信区间）就很宽。

UCB 会优先选择那些可能带来高收益或者太久没被尝试的动作。公式通常表现为：
$$Q(a) + c \sqrt{\frac{\ln t}{N(a)}}$$
其中 $N(a)$ 是动作 $a$ 被尝试的次数。次数越少，后面那一项（不确定性奖励）就越大，从而促使智能体去探索它。
## Thompson Sampling
一种贝叶斯方法。它为每个动作的奖励维护一个概率分布而不是一个固定的数值。每次决策时，从每个动作的分布中抽样一个值，然后选择对应最大抽样值的动作。这种方法天然地平衡了探索与利用。