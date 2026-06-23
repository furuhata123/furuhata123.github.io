---
title: Quick Handbook for HCI
tags: ['blog']
date: 2026-05-01
---
ok whatever
# Brief History of Interface
Hardware -> Programming -> End-user -> Interactive(GUI) -> VUI -> VR
<!-- readmore -->
# Objectives of Interface
## Usability goal
  - **effectiveness**: How well a system does what it is supposed to do.
  - **efficiency**: The speed and ease with which users can achieve their tasks.
  - **safety**: Protecting users from dangerous conditions and undesirable situations
  - **utility**: Whether the system provides the right kind of functionality that users actually need.
  - **learnability**: How easy it is for users to determine how to use the system upon their first exposure.
  - **memorability**: How easy a system is to remember how to use once learned.
## User experience goal

## Norman's design principle
  - visibility: The system status and available actions should be prominent and easily discernible to users, allowing them to infer what to do next.
  - feedback: The system must provide immediate and clear confirmation of the results of a user's action.
  - constraint: Restricting the possible actions at a given moment to prevent users from making errors or improper operations.
  - mapping: The spatial or conceptual relationship between controls and their effects in the real world should be natural and intuitive.
  - consistency: Similar tasks should require similar operations, and identical elements should carry the same meaning throughout the system.
  - affordance: The physical or visual attributes of an object that inherently hint at how it should be used or operated.

> I've always been reflecting on my website's design while reading Norman's principles. Most of it was done purely out of instinct, without much deliberation. Maybe that's why it always feels a bit messy. Now that I think about it, the 'Back' buttons flipflop from left to right (a severe consistency issue), and the navigation links on some pages lack coherent logic (for instance, mixing 'dreams' into a 'blog' page, perhaps a mapping or conceptual model issue?). Many CSS patterns are also poorly structured, like the sidebar links on the blog. Well, there's still a long way to go...
>> More landmine!!
tags' links are not clearly clickable, altho they're in the same style with "links" bar?? (visibility)

# Nielsen's 10 Usability Heuristics
Heuristic Evaluation
1. **visibility** of system status: let user know what is happening. (downloading bar)
2. Match between system and real world(mapping): adpting language and principles user accoustumed to(cart instead of database entries of xxxx...)
3. user control and freedom: undo, redo...
4. **consistency** and standards: same operation takes the same effect in different places, conforming to one rule
5. help users recognize, diagnose, recover from errors
6. recognition rather than recall (menu)
7. flexibility and efficiency of use: Accelerators...
8. aesthetic and minimalist design
9. error prevention(when inputting pwd twice, or user hasen't complete must entry, "submit" is unclickable)
10. help and doc

## Interface Metaphor
interface that designed to resembles physical objects
### Advantages
1. easy to learn new systems
2. Helps diverse users access and use the system
### Disadvantages
1. May violate traditional or cultural norms
> example. on many gui os, trash can/recycle bin are placed on the desktop for easier reach, however, in real life people don't do so.
2. Forces users to understand the system ONLY through the metaphor
> example. when people are used to take kindle like a book, they tend to switch page by flipping the page rather than press the button. (I think that's why flip buttons are cancelled in recent generations?) and they tend to ignore the function to change font style and size, since this doesn't feature in a traditional book
3. Limits the designers' way of conceptualizing the problem space
> Early Digital Audio Workstations (DAWs) or Digital Notepads.
Early software developers were so heavily constrained by the physical metaphor of "cutting and splicing magnetic analog tapes" or "turning physical paper pages" that they initially failed to conceptualize unique digital capabilities, such as non-destructive multi-track editing, infinite undo/redo history, or global keyword searching.
4. Forces designers to replicate existing bad designs
> Early Skeuomorphic Calculator Apps (e.g., early iOS Calculator).
Traditional physical calculators can only display one single row of numbers due to hardware and cost limitations, which is inherently a bad physical design because users cannot review their input history. However, early smartphone calculator apps replicated this exact limitation on a high-resolution retina screen, forcing users to clear everything and restart from scratch if they made a single mistake, just to maintain a "perfect" physical metaphor.
## Intereaction Paradigm
A dominant established model, framework, or philosophy that guides how users perceive, approach, and interact with computing systems during a specific technological era.
(e.g., Shifting from the traditional Desktop Paradigm to the Ubiquitous Computing/IoT Paradigm, where computing fades into the background of real-world environments.)
Ubiquitous Computing

# Various Interface
## comman line interface
cui vs gui
cui: The system displays a prompt(like, C:\>), and the user enters commands.
gui: intereactions and states of the system is displayed in graphical way for users
system reponds according to command
## gui
### consititution
wimp: 
- windows: graphical sephere that can be used, scrolled, zoom in, overlap,opened, closed, moved by mouse
  Window Management
- icons: xxx that, after click, opens an active application, object, command or sheel(?)

*icons and object*

similar: icon share a high resemblence with actual object, like "file"

analogical: icon using logical analogy, like "trash bin"->"delete"

arbitrary: icon has no physical connection with actual object, only depends on social norm, like "wifi"

isomorphic: icon is the same with actual object, like "camera"

actions' icon

icons in application(design priciple? like, emphasis on border, the use of color)

Recognizability
- menus: recall->recognition, a list that when scrolling, provides different choices

  Categorization, Fitts's Law: most used option should be placed in the place user can point to easily
- pointer: using devices like a mouse, control xx, xx, and xx on the graphic.
pointing device

  feedback and error prevention(target size)

### design trend
1. skeuomorphic
2. flat
3. material

### post-wimp
VR AR painter gusture tabletop robot natruallanguage tangible pysical

# Interaction Design Data Gathering

## The Lifecycle of Interaction Design (IxD)
1. **Establishing Requirements**
2. **Designing Alternative Designs**
3. **Prototyping**
4. **Evaluation**

### Why Data Gathering is Crucial?
* **Requirements Definition:** To establish trustworthy and reliable requirements by understanding user needs.
* **Evaluation:** To assess user reactions and evaluate system performance metrics.

---

## Five Key Issues in Data Gathering
1. **Setting Objectives:** Clearly define the purpose of the data gathering process before starting.
2. **Identifying Subjects/Participants:** Decide which target group fits the user profile.
   * *Population:* The entire group of people that fits the target profile.
   * *Sampling:* Selecting a subset of the population. Methods include: **Saturation, Probability (or Non-probability), Random, and Stratified sampling**.
3. **Relationship with Participants:** Maintain a professional and unbiased relationship (e.g., ensure participants don't just say what you want to hear).
4. **Triangulation:** Using two or more data gathering methods or data sources to investigate the same issue, ensuring validity and avoiding bias.
5. **Pilot Study:** A small-scale trial run conducted before the main study to test the process, questions, and equipment for potential bugs.

---

## Data Types: Quantitative vs. Qualitative Analysis

| Dimension | Quantitative Data / Analysis | Qualitative Data / Analysis |
| :--- | :--- | :--- |
| **Data Definition** | Information expressed in **numerical values** (e.g., number of clicks, time in seconds, number of users, cost in dollars). | Information that **cannot be measured numerically** (e.g., aesthetics, user frustration, satisfaction, perceived usability). |
| **Analysis Method** | Numerical or statistical methods used to determine sizes, magnitudes, or quantities. | Expressing characteristics and findings through **Themes, Patterns, and Stories**. |
| **Evaluation Focus** | **Objective and holistic** assessment of the system. | **Detailed and deep** assessment of individual samples or specific parts of the system. |
| **Sample Size** | Requires **a relatively large sample size** to ensure statistical significance. | Analyzes **fewer samples deeply** to extract rich user insights. |

---

## Integrated Comparison of Data Gathering Methods

| Method | Best Purpose | Data Type | Advantages | Disadvantages | Pre-processing Steps | Design & Key Concepts |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Interview** | Exploring problems and user goals. | Mostly **Qualitative** (can include quantitative). | • Interviewer can **guide and probe** the participant as needed.<br>• Fosters direct contact between developers and users. | • **Time-consuming**.<br>• Artificial lab/office environments can feel **intimidating** to participants. | • *Raw:* Audio recordings, videos, interviewer notes.<br>• *Pre-processing:* **Transcription (audio-to-text)**, expanding field notes. | • **Types:** Structured, Unstructured, Semi-structured.<br>• **Question format:** Open-ended, Closed-ended.<br>• Questions must be **clear, concise, and never leading**. |
| **Focus Group** | Gathering **diverse viewpoints** and consensus. | Mostly **Qualitative** (can include quantitative). | • Highlights areas of consensus or conflict among users.<br>• Fosters interaction between developers and multiple users at once. | Can be dominated by **one or two dominant/aggressive participants**, silencing others. | • *Raw:* Audio/video recordings.<br>• *Pre-processing:* Transcription and speaker alignment. | Usually consists of **3 to 10 participants** led by a trained facilitator. |
| **Questionnaire** | Answering **specific, well-defined questions**. | Both **Quantitative & Qualitative**. | **Reaches a large number of people** with very few resources (highly efficient). | • **Design of the survey is critical**.<br>• Low response rates.<br>• May not yield the depth of information actually needed. | • *Raw:* Paper responses, online databases.<br>• *Pre-processing:* **Data cleaning**, filtering incomplete or invalid responses. | • **Structure:** 1. Background info, 2. Core questions.<br>• **Answer formats:** Checkboxes, **Likert Scale** (e.g., 1-5 rating), **Semantic Differential Scale** (bipolar adjectives). |
| **Direct Obs. (Field)** | Understanding user activities within their **true context**. | Primarily **Qualitative**. | Observing actual tasks yields **deep insights** that cannot be obtained through other methods. | • **Extremely time-consuming**.<br>• Generates **massive amounts of data** that are hard to analyze. | • *Raw:* Observer notes, photos, audio/video, **Think-Aloud** protocols.<br>• *Pre-processing:* Transcription, note expansion, aligning multiple data streams. | Tied to **Ethnography**. The designer acts as a passive observer in the user's natural environment. |
| **Direct Obs. (Lab)** | Capturing **individual behaviors and actions** in detail. | Both **Quantitative & Qualitative**. | **Free from external interruptions**, allowing users to focus entirely on specific tasks. | Because the conditions are **artificial/simulated**, results may have limited applicability to real-world environments. | • *Raw:* Interaction logs, task completion times, demographic data.<br>• *Pre-processing:* Transcription, expanding notes, synchronizing recording timelines. | Usually conducted in a usability lab with specific task sheets. |
| **Indirect Obs.** | Observing users and **automatically capturing data** without disrupting them. | **Quantitative** (logs) & **Qualitative** (diaries). | • Users are not distracted by the data gathering process.<br>• Automation enables **long-term observation**. | • Analyzing massive amounts of quantitative log data **requires specialized software tools**.<br>• Participants' memories in **diaries may be exaggerated or biased**. | • *Raw:* **System log data**, user diary entries.<br>• *Pre-processing:* Filtering log data, cross-checking and aligning multi-source datasets. | Most natural user experience since no observer is physically present. |

# Social interaction
Awareness, copresence, communication, collabration

**awareness is an understanding of the activities of others, which provides a context for your own activity**

- group awareness, slack, zoom, notion (anything modern?)*knowing what step others have reached*
- workplace awareness, shared editor...
- contextual awareness

awareness-spporting system design
- whoes info is provided by whom? privacy?
- what kind of info is provided
- when? 
- where
- how

social awareness, task awareness, concept ~, workspace

# Big data analyse
big data refers to the ability to use these every increasing data

**five characteristics:**
1. volume: size
2. variety: type and nature
3. velocity: generating speed
4. veracity: quality/reliability
5. value: worth

architecture: source->collection->processing->store->consume

## collecting learning big data
learning: to gain knowledge from experience/being taught

learning analytics cycle

## common data model/store
## quantitative
moving avg, box plot, density map
## hierarchical
cluster dendrogram, treemap
## network
sanky diagram, chord diagram, node/vertax graph