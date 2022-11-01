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
    <Layout title="Gamer-Store">
      <Container maxW="container.xl">
        <Box ml={['auto', 'auto', 'auto', '30%']}>
          <Title>
            Gamer Store <Badge>2022</Badge>
          </Title>
          <Paragraph>
            An e-commerce web application utilizing the MERN stack (Mongo,
            Express, React, Node.js) capable of making purchases using the
            Stripe API. It also features a admin dashboard for maniging users
            and products.
          </Paragraph>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Repository</Meta>
              <Link
                href="https://github.com/Lars17S/Gamer-Store-Webapp"
                target="_blank"
              >
                Gamer Store Webapp<ExternalLinkIcon mx="2px"></ExternalLinkIcon>
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Platforms</Meta>
              <span>Web</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Mongo, Express, React, Node.js</span>
            </ListItem>
          </List>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <WorkImage
              src="/AldoPonce-homepage/images/projects/gamerStore/gamerStore1.png"
              alt="Homepage"
            />
            <WorkImage
              src="/AldoPonce-homepage/images/projects/gamerStore/gamerStore2.png"
              alt="Stripe"
            />
            <WorkImage
              src="/AldoPonce-homepage/images/projects/gamerStore/gamerStore3.png"
              alt="Admin Products"
            />
            <WorkImage
              src="/AldoPonce-homepage/images/projects/gamerStore/gamerStore4.png"
              alt="Admin users"
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
