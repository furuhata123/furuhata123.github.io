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
