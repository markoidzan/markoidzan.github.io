---
author: idzanmarko
comments: true
date: 2013-11-10 19:00:00+00:00
layout: post
link: https://idzanofficial.wordpress.com/2013/11/10/hackintosh-pokusaj-broj-3/
slug: hackintosh-pokusaj-broj-3
title: Hackintosh - pokušaj broj 3
wordpress_id: 30
categories:
- Blog
---

Izgleda da je istina ono što ljudi kažu, treća sreća :) . Po treći put u manje od godinu dana slažem Hackintosh. Da tako je...  Ali ovaj put sam naučio neke nove i korisne stvari tako da će ovo biti samo kratki intro u ono što slijedi u jednom od idućih objava na blogu.  
  
Prvobitno moram razjasniti neke stvari koje su bitne prije nego što krenem dalje. Kao što vidite iz istaknute slike, ovaj Hackintosh je složen da bih isprobao OS X 10.9 Mavericks te da bih se spremio za prvu direktnu usporedbu dva najnovija OS-a iz tabora Microsofta i iz Apple tabora.  
  
Dakle, za početak navodim specifikacije ovog dragog mi računala na kojem ovaj Mavericks radi već dobra 3 sata :D .  

    
    <b>CPU</b>: Intel Core i3-2100 @ 3.2 GHz<br></br><b>Matična ploča:</b> AsRock H61M-VS sa posljednjim BIOS-om na sebi<br></br><b>Grafička kartica:</b> Palit GeForce 440 GT sa 1GB DDR3 memorije<br></br><b>RAM:</b> 4 GB (1*4GB)<br></br><b>Čvrsti disk:</b> 500 GB Seagate Barracuda<br></br><b>Ostali hardware</b>: CoolerMaster kučište sa ugrađenim napajenjem od 450W , DVD-RW DL optički pogon nepoznatog proizvođača , Logitech KM120 set tipkovnice i miša, Minton MWC 7105 web kamera

  
Hardver je ostao isti već nekoliko mjeseci uz neke sitne izmjene (primjerice ima nekoliko novih no-name ventilatora u kučištu da hlade matičnu te ostatak hardwarea, te nema više Bluetooth adaptera koji je dao svoje prije 3 dana) tako da ga nisam trebao spominjati, no s obzirom da je to već postao must-have objavio sam ga.  
  
Disk je prije nekog vremena doživio veliko reparticioniranje, tako da je diskovni sustav za ovu instalaciju izgledao (pisati ću u Linux/*NIX stilu tako da svi shvate. Ako ne shvate, neka malo Googlaju kako što radi).  

    
    sda1 - System Reserved (za Windows 8.1)

  

    
    sda2 - Windows 8.1 Professional

  

    
    sda3 - OS X

  

    
    sda4 - Radni disk (aka Data disk)

  
Sve particije su u NTFS formatu osim OS X particije koja je u HFS+ Journaled.  
  
Instalacija Windowsa 8.1 prolazi glatko (ah ti novi Windowsi trebaju System Reserved particiju, koju sam mislio izbjeći), sve radi nakon instalacije novih grafičkih drivera (update je trebao jer su ovi bili malo outdated) i zvučnog drivera (VIA zadaje glavobolje) te je red da sad se posvetim OS X-u.  
  
Prije Mavericksa sam morao instalirati Mountain Liona (OS X 10.8). Instalacija je brza i kratka (cca 15 minuta), te sam uz pomoć Niresh ML-a uspio staviti mrežni driver (koji šljaka i na Mavericksu) te zvučni driver (ovaj put sam malo Googlao te našao najnoviji VoodooHDA koji radi i na Mavericksu bez potrebe za prtljanjem po sistemskim fajlovima).  
  
Nakon cijelonoćnog skidanja OS X Mavericksa sa App Storea (US App Store je bio podešen od prije na mojem iCloud računu), slijedi dosadni dio procesa a no se zove izrada boot USB-a za instalaciju OS X Mavericksa. Naravno sve se može uz [dobar tutorial sa pouzdane stranice](http://www.insanelymac.com/forum/topic/280756-guide-the-all-in-one-guide-to-vanilla-os-x-including-chameleon-dsdt-for-beginners-updated-for-mavericks/). Nakon izrade  boot USB-a krenula je instalacija Mavericksa. Prvo je bilo ludovanje i skakanje od sreće kad sam došao do idućeg screena.  
  
[![Mavericks installation početak](http://markoidzan.from.hr/wp-content/uploads/2013/11/Screen-Shot-2013-11-10-at-18.51.55.png)](http://markoidzan.from.hr/wp-content/uploads/2013/11/Screen-Shot-2013-11-10-at-18.51.55.png)  
  
  
  
Sad je slijedio lagani dio posla zvan odabir particije preformatirane u HFS+ Journaled (sve je to obavljeno preko Disk Utility aplikacije sa instalacijskog medija).  
  
Eh da nakon instalacije, trebalo je prekopirati 2 fajla za rad u OS X-u, što sam i učinio preko naredbi koje su navedene u uputstvima. Prvi boot je prošao elegantno, kao i prvo podešavanje te instalacija mrežnog drivera te naravno instalacija zvučnog drivera (kext da budem točniji i OS X nastrojeniji).  
  
Ovaj post pišem sa Mavericksa iz Safarija tako da je to dovoljan dokaz što znači mučenje od pola dana da osposobim USB da krene instalacija, te onda podešavanje novih kextova i na kraju update Chameleon Bootloadera sa klasičnim komandolinijskim sučeljem (ružno mi je grafičko :P te je meni kao *NIX useru to privlačnije).  
  
Detaljniju recenziju Mavericksa te usporedbu sa Windowsima 8.1 očekujte za kojih tjedan-dva nakon što pripremim sve potrebno za recenziju.
