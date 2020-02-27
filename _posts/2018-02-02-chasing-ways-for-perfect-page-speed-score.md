---
id: 10082
title: Chasing Ways for Perfect Page Speed Score
date: 2018-02-02T20:32:59+00:00
author: marko
layout: post
guid: https://idzan.eu/?p=10079
permalink: /2018/02/02/chasing-ways-for-perfect-page-speed-score/
restapi_import_id:
  - 5c82c231cbff1
categories:
  - Technology Blog
---
OK, just to you all know here are my experience with speeding up and optimization of couple of web sites just to have good score like A or just B score on <a href="https://gtmetrix.com/" rel="nofollow">GTMetrix </a>website. I also test sited on <a href="https://tools.pingdom.com/" rel="nofollow">Pingdom Tools</a>, but that is just for OnLoad Time. For full page speed always run page speed tests on GTMetrix. They are more reliable for me in my experiences.

So, how you can get to perfect score. Well, it depends. Really, it depends on type of site that you are running and what kind of content is on page.

For instance, one of projects &#8211; maskice.hr Web Shop &#8211; have got a bunch of small tweaks, almost perfect image compression and even perfect caching plugin named <a href="https://swteplugins.com/product/swift-performance/" rel="nofollow">Swift Performance</a>. And even using <a href="https://www.cloudflare.com/" rel="nofollow">Cloudflare</a> as CDN with <a href="https://aws.amazon.com/ses/" rel="nofollow">Amazon SES</a> + <a href="https://gsuite.google.com/" rel="nofollow">G Suite</a> for e-mail servicing it almost always lately have B grade on GTMetrix with Load Times between 4.8 seconds up to 8 seconds. Yup, we tried couple of Caching plugins, from free like W3 Total Cache, WP Super Cache and Autoptimize and some got problems with current theme and others had problems with crazy long TTFB (Time To First Byte) which may get you problems with latest Google Algorithms for Page Rankings. After some deep testings using <a href="https://m.do.co/c/59c8b7e27db3" rel="nofollow">DigitalOcean</a> VPS with latest cPanel on it with Googles own <a href="https://developers.google.com/speed/pagespeed/module/" rel="nofollow">PageSpeed Insights Module</a> Installed so it can run server cache and JPG to WEBP conversion we saw that it works the best with <a href="https://wp-rocket.me/" rel="nofollow">WP Rocket</a> and after few demo tries on Carbon Copies of web on secondary domain even better with current Caching and Minifying solution <a href="https://swteplugins.com/product/swift-performance/" rel="nofollow">Swift Performance</a> (as Ivica Delic say in <a href="https://www.facebook.com/groups/wordpressspeedup/?ref=group_browse_new" rel="nofollow">WordPress Speed Up Gorup</a> it is Swiss Army Knife like W3 Total Cache but in premium version).

What do you all think when see this image? You would go to images, but you would be all be wrong. Major problem with web shops in general is their complexity and connections to dozen of Analytics sites and as is always recommenced &#8211; Live Chat system. For instance, here are scripts that unfortunately can&#8217;t deffer or set up Leverage browser cache on it.

Here you might say that is bunch of Google Analytics and you would be correct. This site use Analytics for getting better experience with customers and provide customers with related content so here we go. It is getting better soon with better Analytics code. Also, yup Facebook with their inside code for helping us with Facebook Adverts.

As for another example here it is this web site. That&#8217;s right this web site. It is running currently on Shared Host which is provided by Studio4Web (not sponsored by this companies for now) and it loads in about 2 seconds total using GTMetrix tests. This seems crazy enough, but when you see that this site is actually one pager for most of content it is just fine. Site runs free version of WPMU Dev&#8217;s Hummingbird Caching and Optimization plugin and it optimize everything. Even with Optimus Image Compression and Optimization. I mean, that is small amount of tweaks with premium theme so it can be fast no matter what.

And now short conclusion which would most of people say:

  * Use CDN (Cloudflare, MaxCDN, KeyCDN)
  * Have a good Server like VPS with good configuration (examples: DigitalOcean with latest stable cPanel)
  * Optimize images
  * Use some kind of caching plugin (From premium section would recommend W3 Rocket and Swift Performance, and from Free section WP Super Cache and Autoptimize)
  * Compress and minify CSS & JavaScript, HTML is optional
  * Have less amount of images and content on site if it is possible
  * Use small amount of external Javascripts and CSS files, try to host them locally and defer parsing it
  * And finally &#8211; always check site for problems and speed, because of latest Google Algorithm changes

Important note: DigitalOcean, cPanel (BuycPanel.com) and Studio4Web are Referral/Affiliate Links. With signup&#8217;s and purchasing from those sources you help me get better discounts on products on next purchase(s).

Update: as of 11. March 2018. I found broken links to speed tests so links are updated. Needs quick Follow-Up Post Soon with new discoveries.

Update #2: As of 27. May 2018. all links to GTMetrix tests are removed.

Update #3: As of 14. October 2018. I removed few links and broken images which didn&#8217;t show up.