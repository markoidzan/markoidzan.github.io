---
author: idzanmarko
comments: true
date: 2012-09-27 01:21:00+00:00
layout: post
link: https://idzanofficial.wordpress.com/2012/09/27/mac-os-x-on-pc/
slug: mac-os-x-on-pc
title: Mac OS X on PC
wordpress_id: 69
categories:
- Blog
- Technology Blog
---

As a prelude to begin to describe what a Hackintosh (H @ ckintosh, OS X on the desktop computer / laptop that is not from Apple) I'll have to access the material on my favorite website (Wikipedia and OSX86).So according to wikipedia Hackintosh is a computer on which it is installed OS X (any version), which is supported on a particular hardware / hardware. In fact not all hardware is supported (eg, "vanilla" (clean) installation of OS X Lion is not supported AMD hardware, while Intel supported 100%).

  


According OSX86 portal / wikipedia hackintosh is a computer that can run OS X on any version (either modified / unmodified).

  


  


The main thing about hackintosh is that it is not supported bootcamp (should have the Apple EFI firmware to upgrade to it) and some tidbits on some chipsets (eg not supported by all motherboards because there is no such * kext for ethernet or sound card). But on most Intel held hackintosh hardware should work.

  


  


So to show you how easy it is to have OS X Lion, Windows 8, Linux Mint 13 and OS X Lion Mountain I'll explain the procedure by which I was installing operating systems.

  


  


Specifications of the computer that is used for the ultimate hackintosh and ultimately multiboot.

  

    
    <b>CPU:</b> Intel Core i3 2100@3.2 GHz

  

    
    <b>Motherboard:</b> ASRock H61M-VS Ivy Bridge universal compatibility with BIOS

  

    
    <b>Graphics Card:</b> Palit GeForce GT 440 with 1GB DDR3 memory

  

    
    <b>RAM:</b> 4 GB (1 * 4GB)

  

    
    <b>Disk drive:</b> 500 GB Seagate Baracuda split into two partitions

  

    
    <b>Other hardware:</b> CoolerMaster enclosure with built Corded than 450W, DVD-RW optical drive manufacturer unknown, km120 Logitech keyboard and mouse set, Minton MWC 7105 webcam, Bluetooth 2.0 adapter unknown manufacturer (older device)

  


  


So first I made up everything from the hard drive to your network account on Dropbox, SkyDrive, Box and the external hard drive of 2TB.

  


  


After backup followed by the preparation of the partitions. That's what I did in PartedMagic (which I have in Hiren's BootCD v15.1-in).

  


Partition is as follows:

  


  

    
    Sda1 (ie the first partition) - Windows 8 formatted in NTFS (100GB)

  

    
    Sda2 (second partition) - Backup and data partition (which was created at the end of the disc) (200GB)

  

    
    Sda3 (third partition) - OS X Lion formatted in HFS + (100GB)

  

    
    Sda4 (main extended partition on which I set up Linux and OS X Lion Mountain)

  

    
    Sda5 (the first logical partition) - Linux Mint 13 (root & data) formatted in ext4 - 20GB

  

    
    Sda6 (second logical partition) - OS X Lion Mountain formatted in HFS + - 80GB

  

    
    Sda7 - Linux Swap - 4GB

  


  


  


So first I installed Windows 8 on a Windows partition, and then Linux Mint on from before a certain partition. GRUB bootloader is installed on the root of the whole disc (so that it is recognized by the Chameleon bootloader). Following OS installed was OS X Lion (I used iAtkos L2 DVD, since it already has a kext for the graphics card and the sound card). And at the very end I installed Niresh12459 Mountain Lion (OS X ML made from Niresh12459 OS X modifier).

  


  


Of supporting the operating system:

  


Windows 8 automatically recognizes all other than a sound card but that is the least problem ☺ important that it works without problems☺

  


Linux Mint 13 all recognize from the first installation and provides additional graphic drivers (it is recommended to install so I installed them). So all 5 for Linux ☺

  


OS X Lion is recognized during the installation of the sound card and graphics card, while for the network card I had to install extra kext for Lion via Multibeast

  


Mountain Lion OS X has a similar support as well as Lion, but the only problem is that I just sound kext not working with ML :P

  
  
  

