---
author: idzanmarko
comments: true
date: 2018-02-02 20:32:59+00:00
layout: post
link: https://idzanofficial.wordpress.com/2018/02/02/chasing-ways-for-perfect-page-speed-score/
slug: chasing-ways-for-perfect-page-speed-score
title: Chasing Ways for Perfect Page Speed Score
wordpress_id: 10082
categories:
- Technology Blog
---

OK, just to you all know here are my experience with speeding up and optimization of couple of web sites just to have good score like A or just B score on [GTMetrix ](https://gtmetrix.com/)website. I also test sited on [Pingdom Tools](https://tools.pingdom.com/), but that is just for OnLoad Time. For full page speed always run page speed tests on GTMetrix. They are more reliable for me in my experiences.

So, how you can get to perfect score. Well, it depends. Really, it depends on type of site that you are running and what kind of content is on page.

For instance, one of projects - maskice.hr Web Shop - have got a bunch of small tweaks, almost perfect image compression and even perfect caching plugin named [Swift Performance](https://swteplugins.com/product/swift-performance/). And even using [Cloudflare](https://www.cloudflare.com/) as CDN with [Amazon SES](https://aws.amazon.com/ses/) + [G Suite](https://gsuite.google.com/) for e-mail servicing it almost always lately have B grade on GTMetrix with Load Times between 4.8 seconds up to 8 seconds. Yup, we tried couple of Caching plugins, from free like W3 Total Cache, WP Super Cache and Autoptimize and some got problems with current theme and others had problems with crazy long TTFB (Time To First Byte) which may get you problems with latest Google Algorithms for Page Rankings. After some deep testings using [DigitalOcean](https://m.do.co/c/59c8b7e27db3) VPS with latest [cPanel](https://billing.buycpanel.com/bill1/aff.php?aff=1663) on it with Googles own [PageSpeed Insights Module](https://developers.google.com/speed/pagespeed/module/) Installed so it can run server cache and JPG to WEBP conversion we saw that it works the best with [WP Rocket](https://wp-rocket.me/) and after few demo tries on Carbon Copies of web on secondary domain even better with current Caching and Minifying solution [Swift Performance](https://swteplugins.com/product/swift-performance/) (as Ivica Delic say in [Wordpress Speed Up Gorup](https://www.facebook.com/groups/wordpressspeedup/?ref=group_browse_new) it is Swiss Army Knife like W3 Total Cache but in premium version).

What do you all think when see this image? You would go to images, but you would be all be wrong. Major problem with web shops in general is their complexity and connections to dozen of Analytics sites and as is always recommenced - Live Chat system. For instance, here are scripts that unfortunately can't deffer or set up Leverage browser cache on it.

Here you might say that is bunch of Google Analytics and you would be correct. This site use Analytics for getting better experience with customers and provide customers with related content so here we go. It is getting better soon with better Analytics code. Also, yup Facebook with their inside code for helping us with Facebook Adverts.

As for another example here it is this web site. That's right this web site. It is running currently on Shared Host which is provided by Studio4Web (not sponsored by this companies for now) and it loads in about 2 seconds total using GTMetrix tests. This seems crazy enough, but when you see that this site is actually one pager for most of content it is just fine. Site runs free version of WPMU Dev's Hummingbird Caching and Optimization plugin and it optimize everything. Even with Optimus Image Compression and Optimization. I mean, that is small amount of tweaks with premium theme so it can be fast no matter what.

And now short conclusion which would most of people say:




    
  * Use CDN (Cloudflare, MaxCDN, KeyCDN)

    
  * Have a good Server like VPS with good configuration (examples: DigitalOcean with latest stable cPanel)

    
  * Optimize images

    
  * Use some kind of caching plugin (From premium section would recommend W3 Rocket and Swift Performance, and from Free section WP Super Cache and Autoptimize)

    
  * Compress and minify CSS & JavaScript, HTML is optional

    
  * Have less amount of images and content on site if it is possible

    
  * Use small amount of external Javascripts and CSS files, try to host them locally and defer parsing it

    
  * And finally - always check site for problems and speed, because of latest Google Algorithm changes



Important note: DigitalOcean, cPanel (BuycPanel.com) and Studio4Web are Referral/Affiliate Links. With signup's and purchasing from those sources you help me get better discounts on products on next purchase(s).

Update: as of 11. March 2018. I found broken links to speed tests so links are updated. Needs quick Follow-Up Post Soon with new discoveries.

Update #2: As of 27. May 2018. all links to GTMetrix tests are removed.

Update #3: As of 14. October 2018. I removed few links and broken images which didn't show up.
