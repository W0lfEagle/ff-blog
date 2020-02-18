import React from 'react'
import Layout from '../../components/Layout'

export default ({data}) => (
  <Layout footerData={data.footerData} navbarData={data.navbarData}>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
        </div>
      </div>
    </section>
  </Layout>
)

export const thanksPageQuery = graphql`
  query ThanksPage {
    ...LayoutFragment
  }
  `