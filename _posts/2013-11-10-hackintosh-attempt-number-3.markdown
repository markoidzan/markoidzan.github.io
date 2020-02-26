---
author: idzanmarko
comments: true
date: 2013-11-10 19:10:00+00:00
layout: post
link: https://idzanofficial.wordpress.com/2013/11/10/hackintosh-attempt-number-3/
slug: hackintosh-attempt-number-3
title: Hackintosh - attempt number 3
wordpress_id: 29
categories:
- Technology Blog
---

It seems that it is true what people say, third time lucky :) . For the third time in less than a year I tried to make Hackintosh. Yes that's right ... But this time, I learned some new and useful things so that this will be just a brief intro to what follows in one of the next blog entries.  
  
Originally, I have to clarify some things that are important before you move on. As you can see from the highlighted image, this is a complex Hackintosh I tried OS X 10.9 Mavericks and I got ready for the first direct comparison of the two latest OS from Microsoft camp and the Apple camp.  
  
So, to start with the specifications of this precious quote me the computer on which the Mavericks already doing a good 3 hours :D .  

    
    <strong>CPU:</strong> Intel Core i3-2100@3.2 GHz<br></br> <strong>Motherboard:</strong> ASRock H61M-VS with the latest BIOS on it<br></br> <strong>Graphics Card:</strong> Palit GeForce GT 440 with 1GB DDR3 memory<br></br> <strong>RAM:</strong> 4 GB (1 * 4GB)<br></br> <strong>Disk Drive:</strong> 500 GB Seagate Barracuda<br></br> Other hardware: CoolerMaster enclosure with built Corded than 450W, DVD-RW optical drive an unknown manufacturer, Logitech km120 set of keyboard and mouse, Minton MWC 7105 webcam

  
Hardware has remained the same for several months, with some minor changes (such as a few new no-name fan housing to cool the home and the rest of the hardware, and there is more than one Bluetooth adapter which gave her 3 days ago), so it should not have mentioned, but given that it has already become a must-have released him.  
  
Drive some time ago suffered extensive Repartitioning so that the drive system for this installation look (I will write in Linux / * NIX style so that all understand. If you do not understand, a little bit of Googling should help how it works).  

    
    sda1 - System Reserved (for Windows 8.1)

  

    
    sda2 - Windows 8.1 Professional

  

    
    sda3 - OS X

  

    
    sda4 - Working disk (aka Data disk)

  
All partitions are NTFS format other than OS X partition which is in HFS + Journaled.  
  
Installing Windows 8.1 goes smoothly (oh you need a new Windows System Reserved partition, which I thought to avoid), everything works after installing new graphics drivers (update is needed because these were a bit outdated) and sound drivers (VIA caused headaches) and the red now that I devote OS X.  
  
Before the Mavericks had to install Mountain Lion (OS X 10.8). Installation is quick and short (about 15 minutes), and I'm using Niresh ML and managed to put the network driver (which slag and the Mavericks) and sound driver (this time I googled a bit and found the latest VoodooHDA which works without the need to Mavericks for fumbling for system files).  
  
After all night downloading part of OS X Mavericks from App Store (U.S. App Store was set from before in my iCloud account), followed by a boring part of the process but is called making a boot USB to install OS X Mavericks. Of course, everything can be with a [good tutorial with a reliable site](http://www.insanelymac.com/forum/topic/280756-guide-the-all-in-one-guide-to-vanilla-os-x-including-chameleon-dsdt-for-beginners-updated-for-mavericks/). After creating the boot USB and started the installation Mavericks. First there was rage and jumping for joy when I came to the next screens.  
  
[![Mavericks installation početak](http://markoidzan.from.hr/wp-content/uploads/2013/11/Screen-Shot-2013-11-10-at-18.51.55.png)](http://markoidzan.from.hr/wp-content/uploads/2013/11/Screen-Shot-2013-11-10-at-18.51.55.png)  
  
  
  
Now followed the light of the work called partition selection preformatted in HFS + Journaled (all this was done through the Disk Utility application from the installation media).  
  
Eh, after installation, it is copy the 2 files to work in OS X, which I did over the commands that are listed in the instructions. The first boot is passed elegant, like the first setup and installation of network drivers and of course the installation of sound drivers (kext to be accurate and OS X correctly).  
  
I'm writing this post with the Mavericks from Safari so that it is sufficient evidence of torture, which means half a day to enable USB to start the installation, and then set the new kext and eventually update Chameleon bootloader with classic terminal interface (ugly my graphic :P and me as a * NIX user to more attractive).  
  
Mavericks detailed review and comparison with Windows 8.1 expect for them a week or two after you prepare everything you need for a review.
