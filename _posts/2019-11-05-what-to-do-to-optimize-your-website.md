---
title: What to do to optimize your website
date: 2019-11-05T01:31:20+00:00
layout: post
categories:
  - Blog
---
Alright, you got your website online and it is fine from your side but then shocker &#8211; some random reader of website contact you to say that your website is slow as &#x1f986; and took him almost a 30 seconds to load website.

Now, you are in shock, don&#8217;t know what to do. You don&#8217;t know what did you did wrong, for you or is fine and with good speed.

For now there is one big weird which you might don&#8217;t know and it is CACHE. Yes, Cache. Your website is cashed in your browser and it is fast for you but not for others.

There are lot of things that you can do to enable caching, and simplest is it you use WordPress then just search in Official Repo for Caching plugin. Yup, start with plugin.

After getting plugin which you want (recommended is WP Super Cache for free solution and WP Rocket as Premium plugin) get to GTMetrix and check website to see improvement. Plus Flush Cache before testing website. While testing and checking website do tweaks which would enable server side Caching and optimizing website.

Next big step is to compress images with optimal step to serve images as WebP and enable Lazy Loading on images. You would see a really big improvements.

And finally, just check everything which can be tweaked within CSS and JavaScript code. If possible optimize it so it could be in smaller size with combining files in ones so it could get less requests to your server.

For me best solution which I use on lot of websites to make them really fast is:  
• WP Rocket as Caching Plugin  
• Imagify as image optimization plugin plus custom optimization with Photoshop, IrfanView and couple of web based solutions for image compression  
• Native Lazyload to use lazyload within browser features  
• WP Toolbelt as major replacement for Jetpack plugin (Jetpack still have some features which I use on come of websites)  
• Custom plugins for website which enables Google Analytics, some tasks which can be implemented within functions.php file
