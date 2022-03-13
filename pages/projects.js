import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbSpotifind from '../public/images/projects/thumb-spotifind.png'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
      <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={1} gap={6}> 
    <Section>
        <ProjectGridItem id="spotifind" title="Spotifind" thumbnail={thumbSpotifind}>
            An iOS app that uses Spotify's API to find song recommendations based on your profile.
            </ProjectGridItem>
    </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}

export default Projects
