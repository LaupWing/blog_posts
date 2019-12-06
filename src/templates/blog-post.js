import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'

export default function Template({data}){
    const post = data.markdownRemark
    console.log(data)
    return(
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div className='blog_detail'>
                <Link to="/blog">Go Back</Link>
                <hr/>
                <header>
                    <h1>Metadata</h1>
                    <h2>{post.frontmatter.title}</h2>
                    <h2>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h2>
                </header>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path:String!){
        markdownRemark(frontmatter:{path:{eq: $path}}){
            html
            frontmatter{
                path
                title
                author
                date
            }
        }
    }
`