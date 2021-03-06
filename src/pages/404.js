import React from "react"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const error = () => {
  return (
    <Layout>
      <SEO title="Error" description="Error page" />
      <header className="error">
        <Banner title="some roads have a dead end">
          <Link to="/" className="btn-white">
            Back To Home Page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
