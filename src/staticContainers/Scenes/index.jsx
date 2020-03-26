import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "components/common/SEO"
import Container from "components/common/Container"
import { Wrapper, Flex } from "./styles"

export default () => {
  const { airtable } = useStaticQuery(graphql`
    query {
      airtable: allAirtable(filter: { table: { eq: "Schedule (test - Marlow)" } }) {
        edges {
          node {
            id
            data {
              Genre
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper as={Container}>
      <SEO title="Scenes" />
      <h1>Static Scenes</h1>
      <Flex>
        {airtable.edges.map(
          ({
            node: {
              id,
              data
            },
          }) => (
            <pre><code>
              {JSON.stringify(data, null, 2)}
            </code></pre>
          )
        )}
      </Flex>
    </Wrapper>
  )
}
