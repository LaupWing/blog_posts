<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby: MD blogpost site
</h1>

# Gatsby
<details>
<summary>I have left the default Gatsby README here. So click here to see that.</summary>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->

</details>

## Table of contents
1. [What is Gatsby](#1-what-is-gatsby)
2. [Intro](#2-intro)
3. [Log](#3-log)
    1. [Week 1](#31-week-1)
        1. [Summary](#311-summary)
        2. [Code Explaination](#312-code-explaination)
        3. [Sourcelist](#313-sourcelist)
    2. [Week 2](#32-week-2)
        1. [Summary](#321-summary)
        1. [Code Explaination](#322-code-explaination)
        1. [SourceList](#323-sourcelist)

## 1. What is Gatsby?
Gatsby is an framework that creates static HTML files with the addition bonus that it every site is leveraging the latest web technologies such as **React** and **GraphQL**.

### 1.1 How to install
```bash
git clone this repo

npm install 

gatsby develop
```
### 1.2 How to add a blog
1.  Add a new directory in the `pages` directory
2.  Give this directory a name (preferably a date)
3.  Add a new md file in this directory
4.  Add the following above the md file
    ```md

    ---
    path: "/blog/post-one"
    date: "2019-11-05"
    title: "Testing Blog: Blog pure for testing features"
    author: "Laup Wing"
    ---

    ```
    The order doesnt matter, but you need every meta data of above.
5. Write plain markdown!

## 2. Intro
So I used Gatsby to generate HTML webpages with Markdown files. This site is mainly used for deploying my articles for the minor web development.

**_Click Image below for the Live Demo_**
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Click me to see the site" src="https://github.com/LaupWing/blog_posts/blob/master/src/images/homepage.PNG?raw=true" width="100%" />
  </a>
</p>

## 3. Log
In this section you can find what i have done (the log) for this project
### 3.1 Week 1
#### 3.1.1 Summary
I began learning gatsby by following a [tutorial by Brad Traversy](https://www.youtube.com/watch?v=6YhqQ2ZW1sc&t=3233s) on Youtube. Prior to this tutorial i had almost no knowledge about GraphQL and some knowledge about React. During this tutorial i understood almost nothing about the GraphQL part. The instructor (Brad) didn't explain alot about GraphQL, because it wasn't a GraphQL tutorial but a Gatsby. So after this tutorail i didn't and still don't understand almost 30% of this tutorial, but that is mainly because of GraphQL. After finishing this tutorial i went on my own and tried to create my blog website. I also wanted to implement a new techonlogy called gsap for my animation, and add react states (actually hooks) to implement some theme switching.

**Theme Switching**
![Theme switching](https://github.com/LaupWing/blog_posts/blob/master/src/images/reactstates.gif?raw=true)
**Failed gsap animation**
![Failed gsap animation](https://github.com/LaupWing/blog_posts/blob/master/src/images/gsap.gif?raw=true)
#### 3.1.2 Code Explaination
##### Config
In the `gatsby-config.js` file you can find the configuration of gatsby. Configuration like plugins sitemetadata and where gatsby can find the MD files to generate the static HTML are configured here.
```js
module.exports = {
  siteMetadata: {
    title: `My Blogs`,
    description: `A blog post like website, where i host my school articles`,
    author: `@LaupWing`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
...
```
##### MD files
Before i explain how the MD files are connected to the React templates, i will show you how the MD files looks like so that you will have a better feeling about how React (or rather GraphQL) handles the MD file.

If  you look at the MD file below the first thing that you notice is the header section with some kind of metadata. Well this part of the markdown file is the most (and only) important part of the whole MD document. The `path` property's tells gatsby which path this MD file will be located. The rest of the property's are used just to show the user some metadata.

```markdown
---
path: "/blog/post-one"
date: "2019-11-05"
title: "Testing Blog: Blog pure for testing features"
author: "Laup Wing"
---
# My first Gatsby

TESTTTT

# Look at this Video:
 
`youtube:https://www.youtube.com/embed/2Xc9gXyf2G4`

# Pen example:
 
https://codepen.io/laupwing/pen/gNpLXy
```

##### Gatsby Creating Page 
One of the default files when creating a default Gatsby project file is the `gatsby-node.js` file. This file is the main file which transforms the MD files to static HTML/React files. 

Basically what is happening here is that we export an arrow function with as parameter an object with the properties acitons and graphql. Inside this arrow function we first piont to path of our template to say which template we want Gatsby to generate our MD files from. 

After that we returned an grapql query to the MD files and receive the propties in the formatter object which is: title, path, date, and the author. When we received these information we createPage with this information from graphql. 

**_Note: I still dont understand alot of graphql my biggest question how graphql knows where to look for these files and how it is proccesed, but unfortunate its not included in the tutorial. GraphQL is an tutorial worht on its own._**
```js
const path  = require('path')

exports.createPages = ({actions, graphql})=>{
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/blog-post.js')

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                node{
                    html
                    id
                    frontmatter {
                        title
                        path
                        date
                        author
                    }
                }
                }
            }
        }
    `).then(res=>{
        if(res.errors){
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({node})=>{
            console.log(node)
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}
```

#### 3.1.3 Sourcelist
*   [Gatsby Tutorial by Brad Traversy](https://www.youtube.com/watch?v=6YhqQ2ZW1sc&t=3233s)
*   [Gatsby States Tutorial by Code Bushi](https://www.youtube.com/watch?v=ThCfN5WJ0cU)
*   [Gsap Tutorial by Coursetro](https://www.youtube.com/watch?v=YqOhQWbouCE&t=1112s)

### 3.2 Week 2

#### 3.2.1 Summary 

During week 2 i was finished with the core functional of this project. I only needed to add some extra funtional to the Markdown website generating. Like the skip to heading links, codepen integration, code higlighting, youtube embed, and unicode emotes support. 
So in short what i needed to do is add these things to the plugin list of gatsby:

* Skip Headings  
* Codepen integration  
* Unicode support  
* Youtube Embed  
* Code highlighting

**Skip Headings**
![Skip Headings](https://github.com/LaupWing/blog_posts/blob/master/src/images/skipheadings.gif?raw=true)
**Codepen integration**
![Codepen integration](https://github.com/LaupWing/blog_posts/blob/master/src/images/codepen.gif?raw=true)
**Unicode support**
![Unicode support](https://github.com/LaupWing/blog_posts/blob/master/src/images/unicode.PNG?raw=true)
**Youtube Embed**
![Youtube Embed](https://github.com/LaupWing/blog_posts/blob/master/src/images/youtube.gif?raw=true)
**Code highlighting**
![Unicode support](https://github.com/LaupWing/blog_posts/blob/master/src/images/codehiglight.PNG?raw=true)

#### 3.2.2 Code explaination
Basically every plugin works the same but with diffrent configurations. The plugins of gatsby can be find in the `gatsby-config.js` file. All of the plugins above are placed in the plugins of `gatsby-transformer-remark`. The reason for this is because this gatsby plugin handles the parsing of markdownfiles.

Below you can see a snippet of the config file. To see all the whole file [click here](https://github.com/LaupWing/blog_posts/blob/master/gatsby-config.js)
```js
module.exports = {
  siteMetadata: {
    title: `My Blogs`,
    description: `A blog post like website, where i host my school articles`,
    author: `@LaupWing`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options:{
            plugins:[
                `gatsby-remark-emoji-unicode`,
                `gatsby-remark-autolink-headers`,
                {
                    resolve: "gatsby-remark-embed-youtube",
                    options: {
                        width: '90%',
                        height: 400,
                    }
                },
                {
                    resolve:"@weknow/gatsby-remark-codepen",
                    options: {
                      theme: "dark",
                      height: 400
                    }
                },
...
```

#### 3.2.3 Sourcelist
*   [gatsby-remark-codepen](https://github.com/octahedroid/gatsby-remark-codepen)
*   [Gatsby Embed Youtube](https://www.gatsbyjs.org/packages/gatsby-remark-embed-youtube/)
*   [Gatsby Emoji](https://www.gatsbyjs.org/packages/gatsby-remark-emoji-unicode/)
*   [Gatsby Code Higlighting](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)