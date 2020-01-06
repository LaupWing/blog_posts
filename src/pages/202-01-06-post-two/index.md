---
path: "/blog/post-two"
date: "2020-01-06"
title: "Article 2: UI Elements at 60fps"
author: "Laup Wing"
---

## Table of contents
1. [UI Elements at 60fps (Progressive Web App Summit 2016)](#ui-elements-at-60fps-progressive-web-app-summit-2016)
2. [Watch a whole course than code](#watch-a-whole-course-than-code)


# UI Elements at 60fps (Progressive Web App Summit 2016):
`youtube:https://youtube.com/embed/ZqdNgn5Huqk`

## Introduction 
For this blog i have watched the video about UI elements and the frames per second. (See video above) Here you can find what i have learned after watching this talk about UI elements animation.

## Rail
For the first 5 min of this talk the presentator talks about rail. When you think about performance usually rail pops up. Rail is an acronym for:
*   **R**esponse: When a user performs an action, the user expects an response. (0.1s)
*   **A**nimation: The animation that the user sees (preferably 60 fps)(16ms)
*   **I**dle: Do work when the user isnt interacting (50ms)
*   **L**oad: Keep the user on the strain of thoughts by responding within 1s (you can think of laoding a page). (1s) 
 
## Native App?
Users dont care about if an app is an progressive web app or a native app. The user cares about the app behave like an app. And with behave you can think about performance and interaction. Does the app perform well and does it do the things you want it to do (interaction).

So which part of the rail acronym do we put the most imporance in? See the image below.
![alt text](https://github.com/LaupWing/blog_posts/blob/master/src/images/rail.png?raw=true)
*   **R**esponse: Has to be instance
*   **A**nimation: The animation has to be smooth, like instant transitions
*   **I**dle: We have some methods in our arsenal to do things while the user isnt interacting(like request animation).
*   **L**oad: This becomes less important if you have serviceworkers to cache your site.

## Three Components
In order to see how you can achieve this and how it is done, i have made 3 example codes with some technics (of course this is copied from the talk) 
### SideNav
### Swipeable Cards
### Expand and Collapse view