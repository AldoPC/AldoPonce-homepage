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
    <Layout title="COOL Compiler">
      <Container maxW="container.xl">
        <Box ml={['auto', 'auto', 'auto', '30%']}>
          <Title>
            COOL Compiler <Badge>2022</Badge>
          </Title>
          <Paragraph>
            A compiler for the COOL programming language using ANTLR4 parsing
            capabilities and Python to interpret the instructions and create
            functional assembly code.
          </Paragraph>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Repository</Meta>
              <Link
                href="https://github.com/Lars17S/Compiler-Design-Project"
                target="_blank"
              >
                COOL Compiler<ExternalLinkIcon mx="2px"></ExternalLinkIcon>
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Platforms</Meta>
              <span>Windows/macOS/Linux</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Python, ANTRL4</span>
            </ListItem>
          </List>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <WorkImage
              src="/AldoPonce-homepage/images/projects/compiler/compiler1.png"
              alt="Rules"
            />
            <WorkImage
              src="/AldoPonce-homepage/images/projects/compiler/compiler2.png"
              alt="Exceptions"
            />
            <WorkImage
              src="/AldoPonce-homepage/images/projects/compiler/compiler3.png"
              alt="Data segment"
            />
            <WorkImage
              src="/AldoPonce-homepage/images/projects/compiler/compiler4.png"
              alt="Tree segment"
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
