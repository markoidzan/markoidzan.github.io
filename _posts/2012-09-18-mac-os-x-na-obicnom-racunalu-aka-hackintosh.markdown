---
author: idzanmarko
comments: true
date: 2012-09-18 00:21:00+00:00
layout: post
link: https://idzanofficial.wordpress.com/2012/09/18/mac-os-x-na-obicnom-racunalu-aka-hackintosh/
slug: mac-os-x-na-obicnom-racunalu-aka-hackintosh
title: Mac OS X na običnom računalu aka Hackintosh
wordpress_id: 70
categories:
- Blog
---

Kao uvod bi započeo na opisu što je Hackintosh (H@ckintosh, OS X na desktop računalu / prijenosniku koji nije od Applea) morat ću pristupiti materijalu na najdražoj mi web stranici (Wikipedija i OSX86).Dakle prema wikipediji Hackintosh je računalo na koje je instaliran OS X (bilo koja verzija) koja je podržana na određenom hardveru / sklopovlju.  Naime nije sav hardver podržan (npr. u “vanilla” (čistoj) instalaciji OS X Liona nije podržan AMD hardver, dok je Intel podržan 100%).  
  
Prema OSX86 portalu/wikipediji hackintosh je računalo koje može pokrenuti OS X u bilo kojoj verziji (bilo modificiran/nemodificiran).  
  
Glavna stvar kod Hackintosha je ta što nije podržan BootCamp (treba imati Apple EFI da se nadogradi firmware za to) I neke sitnice kod nekih čipseta (npr. nisu podržane sve matične ploče jer primjerice nema Kexta* za Ethernet ili za zvučnu karticu ). No na većini Intel održanog hardvera hackintosh bi trebao raditi.  
  
Dakle da bi vam pokazao kako je lako imati OS X Lion, Windows 8, Linux Mint 13 i OS X Mountain Lion objasnit ću vam procedure po kojoj sam instaliravao operativne sustave.  
  
Specifikacije računala koje je korišteno za izradu ultimativnog hackintosha i ultimativnog multiboota.  


  

    
    <b>CPU</b>: Intel Core-i3 2100 @ 3.2 GHz<br></br><b>Matična ploča:</b> AsRock H61M-VS sa Ivy Bridge kompaktibilnim BIOS-om<br></br><b>Grafička kartica:</b> Palit GeForce 440 GT sa 1GB DDR3 memorije<br></br><b>RAM:</b> 4 GB (1*4GB)<br></br><b>Čvrsti disk:</b> 500 GB Seagate Baracuda podijeljen na dvije particije<br></br><b>Ostali hardware</b>: CoolerMaster kučište sa ugrađenim napajenjem od 450W , DVD-RW DL optički pogon nepoznatog proizvođača , Logitech KM120 set tipkovnice i miša, Minton MWC 7105 web kamera, Bluetooth 2.0 adapter nepoznatog proizvođača (stariji uređaj)

  
  
  


  
Dakle prvo sam napravio backup svega sa čvrstog diska na svoje mrežne accounte na Dropboxu, SkyDriveu, Box-u i na vanjski čvrsti disk od 2TB.  
  
Nakon backup slijedi pripremanje particija. To sam napravio u PartedMagicu (kojeg imam na Hiren’s BootCD-u v15.1).  
  
Particije idu ovako:  


  

    
    Sda1 (dakle prva particija) – Windows 8 formatiran u NTFS (100GB)

  

    
    Sda2 (druga particija) – Backup i data particija (koja je napravljena na kraju diska) (200GB)

  

    
    Sda3 (treća particija) – OS X Lion formatiran u HFS+ (100GB)

  

    
    Sda4 (glavna proširena particija na koju sam postavio Linux i OS X Mountain Lion)

  

    
    Sda5 (prva logička particija) – Linux Mint 13 (root & data) formatiran u ext4 – 20GB

  

    
    Sda6 (druga logička particija) – OS X Mountain Lion formatiran u HFS+ – 80GB

  

    
    Sda7 – Linux Swap – 4GB

  


  
Dakle prvo sam instalirao Windows 8 na Windows particiju, pa zatim Linux Mint na već od prije određene particije. GRUB Bootloader je instaliran na root cijelog diska (tako da  bude prepoznat  i od strane Chameleon Bootloadera). Slijedeći OS koji je instaliran je bio OS X Lion (koristio sam iAtkos L2 DVD jer on već ima kext za grafičku karticu i za zvučnu karticu). I na samome kraju sam instalirao Niresh12459 Mountain Lion (OS X ML napravljen od Niresh12459 OS X modifikatora).  
  
Podržanost od operativnih sistema:  
  
Windows 8 automatski prepoznaje sve osim zvučne kartice al to je najmanji problem. Bitno da on radi bez problema  
  
Linux Mint 13 sve prepoznaje od prve i nudi instalaciju dodatnih grafičkih drivera (preporučeno je za instalaciju pa sam ih instalirao). Dakle Linux sve 5 .  
  
OS X Lion je prepoznao tokom instalacije zvučnu karticu i grafičku karticu, dok sam za mrežnu karticu morao instalirati dodatni kext preko Multibeasta za Lion  
  
OS X Mountain Lion ima sličnu podršku kao i Lion, no jedini je problem što zvučni kext baš i ne šljaka sa ML-om  
  

