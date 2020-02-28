---
title: Creating Simple and Responsive Jekyll blog using CSS Grid
date: 2019-08-16T01:22:43+00:00
layout: post
categories:
  - Blog
---
So, after long time using [WordPress.com](https://wordpress.com) as my backup for old blog posts and after some time with working in Jekyll I got an idea - why not convert old WordPress based blog into Jekyll based which can be hosted on GitHub as git provider and Netlify to provide front end and CDN for it.

After I got idea, I started working on it. It took me one afternoon to create simple design using only CSS Grid as layout.  
And yes, to be clear, I know that I could find similar design already created, but c'mon it is 2019. and CSS Grid layout need more exposure. Beside that, it is easily implemented into any kind of design.

### Tools used for this project:

  * Code editor of choice (VS Code, Atom, Sublime Text etc.)
  * blank folder on your OS
  * Ruby and bundler installed
  * Jekyll gem installed
  * Git (for Windows users that is GitHub Desktop)

In my case, tools used are: _Windows 10 Pro for Workstation v1903_ with **WSL** enabled, _Ubuntu on WSL_, _VS Code_ and of course browser: _Chroumium based MS Edge Dev_

## Basic Structure

First and foremost - start with clean state of Jekyll, which means start with blank folder in which you create this structure:

  * index.html with basic structure
  * _posts folder
  * _includes folder
  * _layouts folder
  * assets folder in which you can create sub-folders for CSS, JS and images (those folders are optional but highly regarded as good practice in web design)

In your CSS folder (or assets if you don't care about sorting files out) start with clean CSS file, or better yet - SCSS file.  
For last couple of small projects I started using SCSS way more then before, so be aware of that option also. To build CSS file from SCSS use Sass compilers, there are a lot of them online and in most of popular Coding Tools like VS Code, Atom and Sublime Text.

Next up is starting with blank **Gemfile** in root of your folder. To make it just use command _bundler init_.

### Setting up

In your **Gemfile** after commented line

```rb
# gem rails
```

Insert this line of code

```rb
gem "jekyll"
```
After inserting line above in your **Gemfile** use your Terminal application (in my case it is Terminal in VS Code with default Terminal to be WSL) and run command

bundle install

After finishing install of bundle command create new file in root of your folder named **_config.yml**

In newly created file insert this lines of code:

```yml
title: Your blog title
mail: me@your.blog # This is optional line
description: Description of blog
baseurl: / # This is optional line
url: "https://your.blog" # Here enter your blog url
permalink: /
:title/ # Optional, but this set up posts to be in title format  
# for permalink so you don't need to enter it manually in Front Matters
```

### Layout and implementation

Next in order of business is to start creating Front Matters in your layout.  
For this part I recommend to check Jekyll's perfect manual, but for basics you would need to do this steps:

  * In place where you would like to display content enter this Liquid line of code

```text
 content (add two curly brackets on start and end to make it work)
```
  * In place of your current title tag enter
  * Now copy all of edited code in __layouts_ folder and create file **default.html**
  * After that remove all of your information's from boilerplate in _index.html_ in root of your project end enter code from below:

```html
---
layout: default
title: Blog homepage
---
<h1>Welcome to blog</h1>
{ % for post in site.posts % }
<ul>
<li><a href="{ { post.url } }">{ { post.title } }</a></li>
</ul>
{ % endfor % }
```

After doing this part it is time to start editing your CSS, or in my case SCSS.

First and foremost, start with code like this:

```css
/*CSS Reset*/
body, html {
height: auto;
margin: 0;
}
/*Basic Grid Layout*/
body {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); 
/*Change min value to which you want it to be, can be in rem, em, vw etc.*/
}
```
After this you have a basic Grid layout which you can customize as you wish on other elements, for instance you can get grid to _.container_ class or maybe some _#main_ ID. This is just simple example of code and how it may look like.

So, you got to this part and you are wondering - man, when I can make posts. Now you can.

Open your _posts folder and in it start with creating file in this scheme **2019-07-04-title-of-post.md**.  
Commenting on this example - date must be written in scheme year-month-date and after dash it can be title of post without any spaces. Spaces are replaced with dashes.

In markdown file you just started using enter this code at start:

```md
---
title: Title of post
author: Author name
---
```

### Conclusion

After entering this basics which are title of your post, and post author you can write your blog post in Markdown.

To be clear, in Markdown you can use HTML code if needed for some reasons.

Now, to publish your post and web online turn out to your GitHub/git application of choice and make commit of all edits and push it.

Next step is creating Netlify account and connecting it to your Git Repository where your blog is. After that is just waiting until deployment is done.  
After deployment is done you can visit your site from link that Netlify provided to you. If you want your custom domain or want to change your temporary domain because you are cheap you can make changes in Netlify Settings of project.

That would be it, simplest way to create modern and responsive blog in few hours.

To see that kind of project please check out [my demo repo](https://github.com/idzan/markoidzan.github.io) to see it in action.

Update on 27. February 2020. - Old files from this demo can be found on GitHub in section Commits.