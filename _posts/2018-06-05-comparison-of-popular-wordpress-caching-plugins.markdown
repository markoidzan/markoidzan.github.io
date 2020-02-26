---
author: marko
date: 2018-06-05 21:31:36+00:00
layout: post
title: Comparison of popular WordPress Caching Plugins
---

Just to note at first - I'm going to compare 4 used Caching Plugins based of only one web site - maskice.hr's Web Shop. I'm only going to compare Plugins so be aware of that. Keeping that out of the line and in mind here we go.<!-- more -->

Just for a note right at begging - VPS used for testing is provided by [DigitalOcean](https://m.do.co/c/59c8b7e27db3) and it have (actually had until late last week*, we had to upgrade it to better system because of testings) 2 vCore of CPU, 2GB of RAM (upgraded to 4GB later in line, and it still wasn't enough) and 40GB of SSD Storage (also later upgraded to 80GB). OS and Control Panel used is CentOS 7 x86_64 with [cPanel/WHM](https://cpanel.net/products/) and installed Google Page Speed Insights module to Apache 2.4. PHP used is 7.1** with gzip and deflate modules enabled.

Let's begin with basic rolling out Plugins which I used and which tools that I used to test them.

Plugins are:**[Swift Performance](https://swteplugins.com/?ref=31)** , **[WP Rocket](https://wp-rocket.me)**, **[WP Super Cache ](https://hr.wordpress.org/plugins/wp-super-cache/)**and **[W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)**.

Let's Begin with **[W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)**.

For configuration and usage, even I as type of System Administrator can say that is a bit difficult. Not super difficult, but without serious looking into documentation I couldn't configure it for a good performance vs caching ratio. If I setup for example Merging of JS files, it actually BROKE design of web site. Seriously, I went OK, this would work to - [Oh no, no, noooo](https://www.youtube.com/watch?v=umDr0mPuyQc)in just a few seconds. Otherwise, plugin is fine I guess. And just to note, this was my personal experience with this plugin while website mentioned above was still on Shared Host powered by [Studio4Web](https://user.studio4web.com/aff.php?aff=493) so maybe that was issue, who knows.

Next on the list is [**WP Super Cache**](https://hr.wordpress.org/plugins/wp-super-cache/).

With this plugin I personally can say that it is good for some medium sized web site and web shop. For something heavier that we actually had it is not super effective. For instance, in this time we tried to configure VPS from the time to communicate with Amazon CloudFront and S3 to make backup and CDN for our service. It was a bit disaster with configuration from Admin panel and from direct file editing, but still it was worth it shot. As for caching vs speed ratio I would provide it as mediocre to bit better ratio trough performance, while caching wasn't super crazy but yeah, it worked good for some time in last year.

While WP Super Cache isn't super "Super", the **[WP Rocket](https://wp-rocket.me)** worked way better.

Not just that WP Rocket has easier to configure CDN options, but it also have connection with CloudFlare which make purging cache from CloudFlare a breeze. Serioulsy, just one click and Cloudflare Cache is purged. Now to configuration - it os pretty much straight forward. Not so much complications, and also something that is good are warnings about options like for Merging JavaScript Files which say that if you enable that option and see some weird artefacts on web site you should disable that option. Nice one for WP Rocket. Also just to note here is that we used WP Rocket in version 2.x days for a while, I would say that improvement with Administration in Version 3 is good. I would never say excelent because there is always ways to improve on ease of use and administration. I want to mention that in version 2.x days we used "GPL Compliant" version of plugin from for me reputable line of testing premium plugins for a while web site. In version 3 and with last week we upgraded to real version with activation code (paid for plugin for a year of support and even more on that note). Perfomance to Cache ratio is great. For a website that weighs in about 5.5MB to 6.3MB depending on images that we use. Most of time ratio goes to Cache and bit of performance.

Just for a small hey this is real note - WP Rocket just got updated from version 3.0.4 to version 3.0.5 on testing web site just in time writing of this post. I mean seriously, this below is screen capture of my TeamViewer session from my work computer where I do most of Administration work for website that is used for this testings.

And finally, there is one "new" kid in block - **[Swift Performance](https://swteplugins.com/?ref=31)**. Man this new kid is a good one, but not perfect.

As of last 2 plugins, it have easy and straight forward configuration. Even for first time after installing and activating plugin it have wizard. Wizard is mostly just clicking Next, but still it have some caveats. For a instance, in Wizard it doesn't have some better explanations for Modes that use for Caching. For me it is not a big deal, but for newcomers it might be harder then expected. One plus side is that plugin have [Lite version](https://wordpress.org/plugins/swift-performance-lite/) which can be downloaded from [WordPress.org Repository](https://wordpress.org/plugins/swift-performance-lite/). My personal experience with this plugin wasn't super great even trough we used it for almost 3 months. In that 3 months we had some issues where after clearing cache Products which were Out of Stock, went again to be In Stock. It also had issue with Cache Reloading which used most of our PHP-FPM process time and CPU. For that we (or to be clear I had to) had to implement Cron Job in WHM just to restart PHP-FPM Regularly to make CPU usage lower.

Another bonus of this plugin is avid Community in [Swift Performance Facebook Group](https://www.facebook.com/groups/SwiftPerformanceUsers/). They helped me sort out some of problems, especially one of developers which is active in group with helping out.

For Cache vs Performance I would say - Performance first, Caching second.

Overall here are my results for which plugin would recommend and which one wouldn't.

So it is obvious which one wouldn'r recomend - W3 Total Cache. It says a lost about plugin and devs which bloats them.

In order of bussines here are best ones:
    
  1. WP Rocket - man I love it, Caching is great, don't break site in Visual and Back End side and also pretty much affordable if you find right Coupon Code.

    
  2. Swift Performance - Good Community, Lite version for users which might don't need Premium

    
  3. WP Super Cache - Mostly ease of use and Caching to Performance Ratio.

    
- Latest upgrade was with 2 more vCore up to 4 vCore based CPU, 8GB of RAM and 160GB SSD based Storage.

- Update #2 was update or to be clear upgrade from PHP 7.1 to 7.2 with PHP-FPM enabled by default


Notice: All links provided to services in meanings of DigitalOcean, Swift Performance and Studio4Web are my referral links. You can use them to get services cheaper and to help supporting this web site.
