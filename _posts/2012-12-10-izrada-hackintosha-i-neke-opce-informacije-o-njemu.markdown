---
author: idzanmarko
comments: true
date: 2012-12-10 00:27:00+00:00
layout: post
link: https://idzanofficial.wordpress.com/2012/12/10/izrada-hackintosha-i-neke-opce-informacije-o-njemu/
slug: izrada-hackintosha-i-neke-opce-informacije-o-njemu
title: Izrada Hackintosha i neke opće informacije o njemu
wordpress_id: 62
categories:
- Blog
---

Dakle jednom davno (OK, ne baš davno, al ima skoro 3 mjeseca ) sam napravio prvi multiboot na Hackintoshu (PC računalu koje je pogonjeno sa Apple Mac OS X operativnim sutavom). Tad je radilo skoro sve savršeno (zvučni driver nije radio).Sad nakon dugog vremena (OK neću s*at nakon 2 mjeseca bez multiboota), palo mi je na pamet (a nije knjiga možda ) da si stavim Windows 8 Pro i OS X Mountain Lion u dualboot (dosta je bilo komplikacija sa quadbootom i sa triplebootom).  
  
PC konfiguraciju koju sam koristio možete pronaći na: [http://markoidzan.from.hr/mac-os-x-na-obicnom-racunalu-aka-hackintosh/](http://markoidzan.from.hr/mac-os-x-na-obicnom-racunalu-aka-hackintosh/)  
  
I nakon osnovne konfiguracije diskovnog sustava i podjele na 3 particije (te odabira Data particije za boot Windowsa 8), vrijeme je za instalaciju Windoza 8 Pro (legalno dobivenih preko faksa tj. MSDNAA licenciranja). Instalacija prolazi lako i “glatko”… Driver za zvuk je naknadno instaliran (postoji driver za Win 8).  
  
Nakon toga slijedi muka zvana instalacija OS X-a. Ona prolazi “glatko” i brzo (cca 15 minuta  + osnovna konfiguracija). Boot loader zvan Chameleon se dobro instalirao i leti bez problema. E da Niresh12495 distra Mountain Liona ima driver za mrežnu karticu (fala k**cu da to ima ) i za zvučnu. Finalizacija instalacije je prosla bez frke (čak i update na 10.8.2 je prošao bez “beda”).  
  
I sad slijedi najgori problem prije… A to je zvučni kext. On je ovaj put proradio nakon updatea VoodooHDA na verziju 2.7.3 (najbolje radi sa mojim zvučnim čipom).  
  
I na kraju ovo pišem sa OS X-a . Dakle Hackintosh se isplatio
