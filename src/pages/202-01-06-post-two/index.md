---
path: "/blog/post-two"
date: "2020-01-06"
title: "Article 2: UI Elements at 60fps"
author: "Laup Wing"
---

## Table of contents
1. [UI Elements at 60fps (Progressive Web App Summit 2016)](#ui-elements-at-60fps-progressive-web-app-summit-2016)
2. [Rail](#rail)
3. [Native App?](#native-app?)
4. [Three Components](#three-components)
    4. [Sidenav](#sidenav)
    4. [Swipeable Cards](#swipeable-cards)
    4. [Expand and Collapse view](#expand-and-collapse-view)


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

### Sidenav
During this part of the talk the presentator use some important terms to know. See below:

**Primed Elements:** Elements that you have ready to go. When a user clicks on the button to open the sidenav the user expects the sidenav to just pop up.
*   It could be activated at any time
*   Toggling its visibility would take > 100ms (if it takes longer than that it feels laggy)
**Layer Promotion:** Seperate out an element from the page. So when pained it or move it, it wont affect any element onthe page the page. The easies way to create this layer (which is called composited layer) is by using the `will-change: transform` property in your css. 
*   **But dont promote everything! Why?**
    *   **Keep your memory usage down**: If you create layers you are going to use memory
    *   **Keep time spent in compositing to a minimum**: Compositing is taking all the layers and squishe it in together and put the pixels on the screen. If you have alot of layers it will cost a lot of energy for the browser.

Below you can see the sidenav and the use of `will-change` to achieve the smooth 60fps;

https://codepen.io/laupwing/pen/yLypxwW

### Swipeable Cards
With this component you dont want to promote layers ahead of time, because they are alot of cards which drives the performance down.
What we want to do here is decouple the input from the actual rendering and drawing bit. You want the animation to keep going even when the users isnt doing anything. The way we do that is by request animation frame for each interaction.

Generally speaking its bad to add touch events to the document, because it blocks scrolling behaviors. The way around this is by padding `{passive: true}` to the event function as third parameter.

_**Note:** During this component i was very lazy, so i just copy pasted the content from their github_
https://codepen.io/laupwing/pen/rNapQzJ?editors=0010#0

### Expand and Collapse view