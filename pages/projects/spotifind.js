import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Spotifind">
      <Container maxW="container.xl">
        <Box ml={['auto', 'auto', 'auto', '30%']}>
          <Title>
            Spotifind <Badge>2021</Badge>
          </Title>
          <Paragraph>
            An iOS app that uses Spotify API to recommend music depending on the
            users likings and taste. Includes a search engine capable of using
            the camera for searching information, play music and manage
            playlists. Project developed for Mobile Devices Development @ ITESM
            CCM.
          </Paragraph>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Repository</Meta>
              <Link href="https://github.com/AldoPC/Spotifind" target="_blank">
                Spotifind<ExternalLinkIcon mx="2px"></ExternalLinkIcon>
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Platforms</Meta>
              <span>iOS</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Swift, Objective-C, Spotify API</span>
            </ListItem>
          </List>
          <SimpleGrid columns={[1, 2, 4]} gap={6}>
            <WorkImage
              src="/AldoPonce-homepage/images/projects/spotifind/spotifind1.jpg"
              alt="Log in"
            />
            <WorkImage
              src="/AldoPonce-homepage/images/projects/spotifind/spotifind3.jpg"
              alt="Find your groove"
            />
            <WorkImage
              src="/AldoPonce-homepage/images/projects/spotifind/spotifind2.jpg"
              alt="Add song to playlist"
            />
            <WorkImage
              src="/AldoPonce-homepage/images/projects/spotifind/spotifind4.png"
              alt="Song preview"
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
