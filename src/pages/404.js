import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = ({data}) => (
  <Layout footerData={data.footerData} navbarData={data.navbarData}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage

export const notFoundPageQuery = graphql`
  query NotFoundPage {
    ...LayoutFragment
  }
  `