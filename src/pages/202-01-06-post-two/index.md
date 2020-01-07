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
The code is not complicated at all it is only a `click` event listener listening to opening the nav by adding a class and removing the class to remove the navbar from sight.

https://codepen.io/laupwing/pen/yLypxwW

### Swipeable Cards
With this component you dont want to promote layers ahead of time, because they are alot of cards which drives the performance down.
What we want to do here is decouple the input from the actual rendering and drawing bit. You want the animation to keep going even when the users isnt doing anything. The way we do that is by request animation frame for each interaction.

Generally speaking its bad to add touch events to the document, because it blocks scrolling behaviors. The way around this is by padding `{passive: true}` to the event function as third parameter.

_**Note:** During this component i was very lazy, so i just copy pasted the content from their github [click here for githublink](), but i tried my best to understand the code that has been written_

One of the important parts of this code is the `requestAnimationFrame` method. Which is an build in browser method. The `requestAnimationFrame` is basically an method that tells the browser to perform an animation and requests a specified function to update an animation before the next repaint(frame). [See more on MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

Because there are many animated cards in this design it is not smart to define the `will-change` beforehand but only when the user performans an action. Thats why this css method will only be applied on events. The function belows starts whenever a user touch the card or clicks on a card. As you can see the `will-change` is only applied when the user performans an action 

```javascript{numberLines: true}
 onStart (evt) {
    if (this.target)
      return;

    if (!evt.target.classList.contains('card'))
      return;

    this.target = evt.target;
    this.targetBCR = this.target.getBoundingClientRect();

    this.startX = evt.pageX || evt.touches[0].pageX;
    this.currentX = this.startX;

    this.draggingCard = true;
    this.target.style.willChange = 'transform'; // <--- here

    evt.preventDefault();
  }
```

When the user Move the card this funtion below will start. The function sets up currentX value
```js
onMove (evt) {
    if (!this.target)
      return;

    this.currentX = evt.pageX || evt.touches[0].pageX;
}
```

Everytime the `requestAnimationFrame` is triggerd the update fuction will start. The update function sets up the translateX values and the opacity value. With the use of the opacity the function determines if the card has to snap back to its original postion or to remove it from the nodelist. If the card is removed from the DOM the other card elements will snap to the top, which is not what we want. What we want is that it will transtion to the top with the help of transform. 
```js
 update () {
    requestAnimationFrame(this.update);

    if (!this.target)
      return;

    if (this.draggingCard) {
      this.screenX = this.currentX - this.startX;
    } else {
      this.screenX += (this.targetX - this.screenX) / 4;
    }

    const normalizedDragDistance =
        (Math.abs(this.screenX) / this.targetBCR.width);
    const opacity = 1 - Math.pow(normalizedDragDistance, 3);

    this.target.style.transform = `translateX(${this.screenX}px)`;
    this.target.style.opacity = opacity;

    // User has finished dragging.
    if (this.draggingCard)
      return;

    const isNearlyAtStart = (Math.abs(this.screenX) < 0.1);
    const isNearlyInvisible = (opacity < 0.01);

    // If the card is nearly gone.
    if (isNearlyInvisible) {

      // Bail if there's no target or it's not attached to a parent anymore.
      if (!this.target || !this.target.parentNode)
        return;

      this.target.parentNode.removeChild(this.target);

      const targetIndex = this.cards.indexOf(this.target);
      this.cards.splice(targetIndex, 1);

      // Slide all the other cards.
      this.animateOtherCardsIntoPosition(targetIndex);

    } else if (isNearlyAtStart) {
      this.resetTarget();
    }
  }
```

This function below handles the other cards to animate to a new position. The main purpose is to add a translateY value to the cards below the deleted card (the cardsbelow is calculated through the startIndex parameter). After the translateY value has been added the transtion css property and deletes the transform, which result in an vertical transition. After this transition all the style property's will be deletend and resetted.

```js
animateOtherCardsIntoPosition (startIndex) {
    // If removed card was the last one, there is nothing to animate.
    // Remove the target.
    if (startIndex === this.cards.length) {
      this.resetTarget();
      return;
    }

    const onAnimationComplete = evt => {
      const card = evt.target;
      card.removeEventListener('transitionend', onAnimationComplete);
      card.style.transition = '';
      card.style.transform = '';

      this.resetTarget();
    };

    // Set up all the card animations.
    for (let i = startIndex; i < this.cards.length; i++) {
      const card = this.cards[i];

      // Move the card down then slide it up.
      card.style.transform = `translateY(${this.targetBCR.height + 20}px)`;
      card.addEventListener('transitionend', onAnimationComplete);
    }

    // Now init them.
    requestAnimationFrame(_ => {
      for (let i = startIndex; i < this.cards.length; i++) {
        const card = this.cards[i];

        // Move the card down then slide it up, with delay according to "distance"
        card.style.transition = `transform 150ms cubic-bezier(0,0,0.31,1) ${i*50}ms`;
        card.style.transform = '';
      }
    });
  }
```
https://codepen.io/laupwing/pen/rNapQzJ?editors=0010#0

### Expand and Collapse view