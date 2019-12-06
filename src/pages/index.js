import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Welcome to my blog website</h1>
        <p>On this website you can find my blogs related to coding</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        </div>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
)

export default IndexPage
