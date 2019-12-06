import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from 'gatsby-link'
import {graphql} from 'gatsby'

const BlogPage = ({data}) => {
    console.log(data)
    return (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post=>(
        <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Post by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br/>
            <br/>
            <Link to={post.node.frontmatter.path}>Read more</Link>
            <br/>
            <br/>
        </div>
    ))}
  </Layout>
)
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark{
            edges{
            node{
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
`

export default BlogPage
