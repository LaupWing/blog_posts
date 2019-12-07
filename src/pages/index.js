import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import GatsbyLogo from '../components/icons/gatsby'
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="home">
            <h1>Welcome to my blog website</h1>
            <p>On this website you can find my blogs related to coding.</p>
            <br/>
            <p>This website is made by <a href="https://www.gatsbyjs.org/">Gatsby</a> and <a href="https://greensock.com/gsap/">Gsap</a></p>
            <p>Gatsby is used for generating static html pages from markdown files</p>
            <p>Gsap is used for the animations for this website</p>

            <div className="powererd_by">
                <h2>Powerd By:</h2>
                <div className="logos">
                    <GatsbyLogo/>
                </div>
            </div>
        </div>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        </div> */}
        {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
)

export default IndexPage
