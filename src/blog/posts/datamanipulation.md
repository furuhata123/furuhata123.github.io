---
title: How computer structured and 3DS encryption
tags: ['blog','crypto']
date: 2026-05-01
---
Suppose we're going to build a computer, we'd like the computer 1. processes as fast as possible; 2. store as much data as possible.
1. constructions
CPU consists of 3 parts, logic units, comtrol units and registers. 
(actually we have special memory called cache)
a natural approach is to make memory units and processing units close, that's why we need registers, there are different kinds of registers, GPR & SPR. 
General-purpose registers are used to hold the data immediately applicable to the operation at hand; main memory is used to hold data that will be needed in the near future, and mass storage is used to hold data that will likely not be needed in the near future.
Data transfer on wires, main memory and CPU are connected by a bunch of wires called bus
stored-program concept 
2. communications
CPU can directly access memory(DMA)(what's the difference between dam and accessing registers?)
to communicate with other devices, a computer needs a controller (port???)
2 standards: USB and firewire
memory mapped I/O
handshaking
status word
parallel and serial communication
modem
3. languages
Stored-program Concept
Machine Cycle: Fetch（取）、Decode（译）、Execute（执）
