---
title: Na hakersko-sistemaškoj fronti
date: 2013-08-24T21:59:00+00:00
author: marko
layout: post
categories:
  - Blog
---
Sve je spremno za ulazak u mistični svijet hakera i hakerskih podviga. A što je to potrebno za taj ulazak pitate se sigurno. E pa za to vam je potreban veliki Internet paket, dosta vremena, nekoliko praznih CD-ova/DVD-ova ili neki USB stick od barem 4GB (8GB je poželjno) te naravno glavna stvar Linux distra po vašoj želji.<a name='more'></a>Kod odabira distribucija poslužite se sa nekoliko izvora. Primjerice **Distrowatch.com**, **Linux za sve (HR)**, **WebUpd8** te **Dedoimedo.com** su odlične stranice za saznati nešto više o OpenSourceu, Linuxima i ostalim poveznicama.

Za totalne Linux početnike preporučam **Linux Mint Cinnamon** ediciju. Zašto baš tu distru odabirem a ne Ubuntua pitate se. Pa evo zašto. OOB (Out-of-Box tj na naški odmah nakon instalacije) ima najbolji uvod, ima laku instalaciju (bolje nego Ubuntu), najsličniji je Windowsima te ima dobru podršku. Ako pak mislite da Mint nije za vas e onda krenite na **Ubuntu**. Tek nakon što dobro savladate neke stvari kako Linux radi (aka _sudo apt-get install make-me-sandwich)_ krenite još dalje istraživati pa si na Ubuntu instalirajte novi DE (novo sučelje kao npr. **Xfce**, **Lxde**, **_KDE_**, **Openbox** itd.).

Ako vam niti to nije dosta&#8230; E sad krenite u pohod na **Debian**. Zašto Debian kad mogu ići na npr. Fedoru ili pak OpenSUSE koji su jednostavni?! Pa evo razloga. Linux Mint je baziran na Ubuntuu kaj ne. Sad Ubuntu je baziran na Debianu dok je Debian jedna od 4 glavne distribucije koje dan danas postoje.

Kad smo kod Debiana onda mogu reći samo jedno. Koristite Stable verziju. Ako trebate nešto novo onda pogledajte malo trikova iz rukava.

Dakle ako bi vi npr htjeli najnoviji paket za Xfce morate prvo editirati

/var/apt/sources.list preko nano editora te tamo dodati testing linije koda kao npr

deb http://debian.carnet.hr testing  
deb-src http://debian.carnet.hr testing

Kad ste to napravili onda morate da malo idete dalje pa opet u **Terminalu** (aka cmd.exe za Linuxe/Androide/OS X/*NIX bazirane sustave, ima ih u vise varijanti kao npr. GNOME Terminal, Xfce Terminal itd.) te napravite trik kao kod _sudo install make-me-sandwich_ (što je poznata fora za učenje početnika što je to zapravo root korisnik/Superuser koji može napraviti sve što god poželite pa čak ako imate Linux na mikrovalnoj).

Sad kod Debiana postoji jedan trik kojeg bi bilo poželjno znati. Taj trik je login u root korisnika iz Terminala.  
To napravite uz naredbu (bez navodnika i sa razmakom) &#8221; _**su -l**_ &#8221; te onda ide root lozinka. Kad ste to napravili sto god da mora imati sudo ispred to se zanemaruje pa se kucaju daljnje naredbe.  
Tako ćete za testing Xfce 4.10 upisati  
_**apt-get -t testing install xfce4**_

Simple zar ne&#8230; Ili ipak nije&#8230;

Što vi mislite, da li je bolje početi sa Ubuntuom, jel bolja Fedora ili openSUSE, možda mislite da je CentOS bolji za učenje hard-core administracije Linuxa itd&#8230; Vaša mišljenja slobodno napišite u komentar.