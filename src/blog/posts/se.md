---
title: Quick handbook of software engineering
date: 2026-06-20
tags: blog
---
### 什麼是「軟體工程」？
將軟體開發與使用的概念進行科學化的系統性統整，是一門為了計劃性、高效率製造「正確軟體」的理論與實踐技術
### 終極目標：QCD的最佳平衡Best Practice
1. 品質（Quality）：滿足客戶需求，沒有Bug。  
2. 成本（Cost）：控制開發費用，降低生產成本。  
3. 納期（Delivery）：縮短開發週期，準時交貨
### 優秀軟體的四大技術特徵
1. 可維護性（Maintainability）：能夠隨著客戶需求的改變而持續演進
2. 可靠性（Dependability/Reliability）：包含安全性，系統發生故障時不會造成嚴重的物理或經濟損失
3. 效率性（Efficiency）：不浪費記憶體或 CPU 週期等硬體資源
4. 實用性（Usability）：用戶不需付出過度勞力即可上手，具備合適的 UI 和充份的文件

<!-- readmore -->
# life cycle
Specification, Development, Validation, Evolution
1. Requirement Analysis Phase
   
    In this phase, software engineers interact with stakeholders to **specify the services and constraints** of the software system, identify any **conditions** on the services, define how outside world will interact with the system. The goal is to understand the problem fully and **document** all requirements.

   ### Requirement Definition Document
   - 作為後續開發、問題解決與決策的唯一依據
   - 對外爭取資源與合作
   - 外部委派外包商（Vendor）時，用來讓對方提出提案與估價的基礎資料

   #### 驗證:
    PoC（概念驗證）：在最前期的示範階段，驗證點子是否能成立; 
    
    Feasibility Study（可行性研究 / FS）：在試作階段事前驗證其實現可能性

2. Design Phase:
   
 **Designing a plan for the constructions of the proposed system.** It establishes the internal structure of the system, including its software architecture, database design, and user interfaces, based on the SRS

   ### 論理設計 external
   核心思維：從軟體使用者或其他系統的視角出發，設計外部規格（如UI/UX、輸入輸出、資料邏輯結構等）

   完全不考慮具體的硬體規格或程式語言（不考慮實現細節 
   ### 物理設計 internal
   核心思維：將論理設計的內容，具體落實到真正的計算機系統上，強烈意識到「實作」與「既有系統」

   關鍵技術Sizing指的是評估並準備好符合系統規模的伺服器與網路資源。  

   X：直接買最快、最強的設備  
   O：若系統生命週期是3年，應參考過去和同業數據，規劃數月到數年的功能擴充方案，並在週期滿了時順暢過渡到新系統，同時考慮財務上的折舊與投資回收

3. Implementation Phase: **actual writing of programs** It translates the design specifications into **executable source code**. It also includes **unit testing** written by the developers themselves

4. Testing Phase: 
   
   In this phase, the software is rigorously evaluated to ensure it meets the original requirements and is free of defects (bugs). It involves running the system under various conditions to verify its correctness and reliability. (**debugging, confirming compatible with the requirements**)

   ### Bug accumulative curves
   ### SLA
   與客戶約定好服務的可用性
   ### Bathtub Curve


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