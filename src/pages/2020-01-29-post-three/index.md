---
path: "/blog/post-three"
date: "2020-01-29"
title: "Article 3: Vue VS React"
author: "Laup Wing"
---

## Table of contents
1. [Introduction](#introduction)
2. [React)](#react)
    2. [States](#states)
    2. [Class based components](#class-based-components)
    2. [Functional Components](#functional-components)
2. [Vue)](#vue)
    2. [Vue Component](#vue-component)
2. [The Diffrence)](#the-diffrence)


# React Vs Vue:


## Introduction 
Frameworks are the hot topic nowaday's in the web development world. But for a good reason! Thanks to frameworks its alot faster to make a website which results the developer having more time perfectin the ux (user experience). 

There are 3 main frameworks that are used now; React, Vue, and Angular. I have learned 2 of these frameworks so far, and that is React and Vue. In this blog you can find my take on these two frameworks, in the hope to help you to decide which framework suits your needs.

## React 
Lets cut to the chase and start with React. React was my second framework that i have learned after Vue. In my experience it was easy to step from Vue to React, because i had a good grasp on components by using Vue alot prior going to React.

The core concept of React consists in my opinion in three parts: Class Components, Functional Components and the State of the components. 

### States
States is basically the state of the app at that current time and moment. By using states you can for example toggle things in your design and hold the input data. In your state you can define infite property's. Whenever one of the property's change in the state, React will re render the components or ui elements that rely on this property.

### Class based components
Class based compenents are usually used in React as containers where you hold your smaller components (functinoal components). This Class based component has the ability to hold states. These states can be passed on as props to the child components. Often you also hold your event functions class components.

You can make lots of Class based components, but when you have a big applications is becomes unclear real fast where you hold certain states. SO it is smart to make Class components sparingly and wisely.

### Functional Components
Most of your app consists of Functional components. These components are often used to for displaying purposes. Functional components often have props that were passed on from a Class based component and based on these props certain ui elements will show or even the whole component.


**NOTE: because of React hooks you can even hold states in your functional components!!! So you can build an entire app from only functional components**


## Vue
Vue, as you can guess it, was my first frameworkt that i had learned. The main reason i learned Vue first was because lots of people said it was easier to learn. And what they said was true! 

Unlike React, Vue has only one components and that is a vue component. 

### Vue Component
In a vue component you have just as in React states, and just as in React states can be used to show certain ui elements and other stuff. To be honest everything, that you need lives in a Vue Component like styles functions states. Everything is ready for you in this single Vue Component

I won't explain the fine details of the Vue Component because the important of a Vue Component is the states, and i have explained a bit of states in the React part of this blog and they are mostly the same.

### Similarities
Both React and Vue has they 'html' (its not really html) in there components, and in both you can run Javascript logic to render certain parts of the DOM or do something else with Javascript. Both has states... and thats where the similarties stop. 

### The Diffrence
In main diffrence is that React is harder to use and learn in comparison to Vue. React has two diffrent types of Components and uses alot of imports to make a fully website. In Vue when you create a Vue by using the cli, you got everything you need with that single `vue create` line. React on the other side needs lots of third party installs like `react-router-dom` to make your routes and much more.

In React you can also wrap your component with anther component so you can also enhance components. I see lots React apps with multiple wrappers around one component so it becomes really hard for me to understand that singel component because it was enhacned multiple times. So in short it adds to the complexity of React.

But if you understand React and the core concepts of React, you have more control on your app vs Vue. 

### Summary

#### React
*   Harder To Learn
*   More control when you learned it

#### Vue
*   Easier to learn
*   One import and you got everything
