import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Box ml={['auto', 'auto', 'auto', '30%']}>
          <Heading as="h1" fontSize={30} mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={1} gap={6}>
            <Section>
              <ProjectGridItem
                id="spotifind"
                title="Spotifind"
                thumbnail="/images/projects/thumb-spotifind.png"
              >
                An iOS app that uses Spotify's API to find song recommendations
                based on your profile.
              </ProjectGridItem>
            </Section>
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Projects
