---
title: Quick handbook of software engineering
date: 2026-06-20
tags: blog
---
# life cycle
## Development
1. Requirement Analysis Phase: In this phase, software engineers interact with stakeholders to **specify the services and constraints** of the software system, identify any **conditions** on the services, define how outside world will interact with the system. The goal is to understand the problem fully and document all requirements.
2. Design Phase: **Designing a plan for the constructions of the proposed system.** It establishes the internal structure of the system, including its software architecture, database design, and user interfaces, based on the SRS
3. Implementation Phase: **actual writing of programs** It translates the design specifications into **executable source code**. It also includes **unit testing** written by the developers themselves
4. Testing Phase: In this phase, the software is rigorously evaluated to ensure it meets the original requirements and is free of defects (bugs). It involves running the system under various conditions to verify its correctness and reliability. (**debugging, confirming compatible with the requirements**)
<!-- readmore -->
### development methdologies
| model       | concept                                                                                                                                                           | pros | cons                                                                                                      | best applications                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| waterfall   | **Strict linear sequential flow.** Each phase must be fully completed with documentation before the next phase begins. **No backtracking**.                       |  **Structure**: Highly structured, clear, and easy to manage. **Clear Documentation**: Every stage has strict deliverables and records.    | **Inflexible**: Extremely rigid; accommodating change in requirements mid-way is very difficult. **Late Working Software**: A working product is not available until late in the lifecycle, increasing risk.           | Projects with well-defined, stable requirements and mature technologies. |
| incremental | Splits the software into multiple **functional modules (increments)**. Each module is developed completely through the stages and delivered like building blocks. | **Early Delivery**: High-priority core software functions can be delivered early. **Lower Initial Risk**: Reduces the initial financial and time risks of the development process.     |**High Architecture Demand**: Requires a perfect top-level system architecture design to integrate later increments. **Total Cost**: Total cost might be higher than the traditional waterfall model. |Large projects where requirements are relatively clear, but phased delivery of core functions is required.                                                                          |
| iterative   | Develops **a very rough but complete version** of the system first, then continuously enhances, refactors, and perfects it through **multiple cycles**(iterations).                                                                  |**Flexible**: Highly adaptable; allows requirements to evolve and change after each iteration. **Continuous Feedback**: Enables continuous improvement based on real user feedback.      | **Scope Creep**: Highly prone to uncontrolled expansion of requirements (scope creep). **Hard to Budget**: Difficult to estimate final costs and timelines accurately at the project's start.                                                                                                          |Modern web/startup projects where requirements are unclear, highly dynamic, or exploratory.                                                                          |

also there is agile method, It completely abandons the heavy documentation and rigid planning of Waterfall. It focuses on flexibility, rapid responses to changing requirements, and close collaboration with users through very short development cycles (sprints).

**prototyping**: in incremental->evolutionary prototyping, iterative->throwaway, rapid. validating ideas, gathering feedback, testing feasility, minimize rework.

# modularity
the division of software into manageable units, generically called modules, each of which deals with only a part of the software’s overall
responsibility.
## coupling
**independence among modules**, whether changes in one module will unknowingly
affect other modules in the system
### types of coupling
1. control coupling: occurs when a module passes control of execution to another, as in a procedure call
2. data coupling: **the sharing of data between modules.** If two modules interact with the same item of data, then modifications made to one module may affect the other, and modifications to the format of the data itself could have repercussions in both modules.
   
 **global data**, which are data items that are automatically available to all modules throughout the system, as opposed to local data items that are accessible only within a particular module unless explicitly passed to another

## cohesion
**the internal binding within each module**
### types of cohension
1. logical cohesion: the cohesion within a module induced by the fact that its internal elements perform activities logically similar in nature
2. functional cohesion: all the parts of the module are focused on the performance of a single activity
## Information Hiding
the restriction of information to a specific portion of a software system. (knowledge about the structure and contents of a program unit) 

The point of information hiding is to keep the actions of modules from having unnecessary dependencies or effects on other modules.
## components
a reusable unit of software. differences

component architecture 

# Tools
 dataflow diagram
 ## UML
 ### use case diagram
 use case(interactions between system and users)

 actors(users)
 ### class diagram
 the structure of classes and relationships between classes 

 relationships: one-to-one, one-to-many, many-to-many 
 ### interaction diagrams: sequence diagram
 depicts the communication between the individuals

(such as actors, complete software components, or individual objects) that are involved in performing a task.

 lifeline, frame, interaction fragments
# Testing
## methodology
- glass-box testing
 the softwaretester is aware of the interior structure of the software and uses this knowledge

**Pareto principle**: results can often be increased most rapidly by applying efforts in a concentrated area.

**basis path testing**: develop a set of test data that insures that each instruction in the software is executed at least once

- black-box testing
   tests that do not rely on knowledge of the software’s interior composition. In short, black-box testing is performed from the user’s point of view.

**boundary value analysis**: equivalence classes

**beta/alpha testing**

# maintain
**user documentation**: explain the features of the software and describe how to use them. It is intended to be read by the user of the software and is therefore expressed in the terminology of the application.
**system documentation**: describe the software’s internal composition so that the software can be maintained later in its life cycle.
**technical documentation**:  describe how a software system should be installed and serviced 