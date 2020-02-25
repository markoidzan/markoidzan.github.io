---
author: idzanmarko
comments: true
date: 2013-08-25 02:07:00+00:00
layout: post
link: https://idzanofficial.wordpress.com/2013/08/25/on-linux-sys-hacking-front/
slug: on-linux-sys-hacking-front
title: On Linux sys-hacking front
wordpress_id: 40
categories:
- Blog
---

Everything is ready to enter the mystical world of hackers and hacker exploits. And it is necessary for the entry of wonder for sure. Well, for that you need a big Internet package, a lot of time, a few empty CD-ova/DVD-ova or a USB stick of at least 4GB (8GB is preferable), and of course the main thing a Linux distro of your choice.When selecting distribution Serve with several sources. For example **Distrowatch.com**, **Linux for All (HR)**, **WebUpd8** and **Dedoimedo.com** are excellent sites to learn more about OpenSource, Linux, and other links.  
  
For a complete Linux beginners I recommend **Linux Mint Cinnamon** edition. Why this distro I choose not Ubuntu wonder. Well here's why. OOB (Out-of-Box that is on our way immediately after installation) is the best introduction, it has easy installation (better than **Ubuntu**), is most similar to Windows and has good support. But if you think that Mint is not for you then you will go to **Ubuntu**. Only after a well mastered some things that Linux works (aka _sudo apt-get install make-me-sandwich_) go even further explore and you're on Ubuntu install new DE (new interface, such as **XFCE**, **LXDE**, _KDE_, **Openbox** etc.) .  
  
If that's not enough ... Now marches on **Debian**. Why Debian when I can go on as Fedora or OpenSUSE that simple?! So here are the reasons. Linux Mint is based on Ubuntu isn't it. Now Ubuntu is based on Debian, while Debian is one of the four main distribution that still exist today.  
  
Speaking of Debian, then I can only say one thing. Use the Stable version. If you need something new, then look at some tricks up their sleeves.  
  
So if for example you want the latest package for Xfce, you must first edit  
  
/ var / apt / sources.list via nano editor and add there testing lines of code such as  
  
deb http://debian.carnet.hr testing  
deb-src http://debian.carnet.hr testing  
  
When you do that then you need to go a little further and again in the **Terminal** (aka cmd.exe for Linux / Android / OS X / * NIX based systems, have them in several variants, such as GNOME Terminal, Xfce Terminal, etc.) and make trick like _sudo make install-me-sandwich_ (which is known to cool for beginners learning what it actually root / Superuser that can do whatever you want even if you have Linux on the microwave).  
  
Now in Debian there is one trick that it would be desirable to know. The trick is to login to the root user from the terminal.  
Do this with the command (without the quotes and with spaces) "**su -l**" and then go root password. When you do whatever you must have sudo in front of it is ignored, so knocking further commands.  
You for testing Xfce 4.10 enroll  
**apt-get-t testing install xfce4**  
  
Simple is not it ... Or is it ...  
  
What do you think, is it better to start with Ubuntu, do better Fedora or openSUSE, you might think that CentOS better to learn hard-core administration, Linux, etc. .. Your opinions please feel free to write a comment.
