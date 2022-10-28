import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr.js'
import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Link,
  Button,
  Image
} from '@chakra-ui/react'
import { IoMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Pepsi from '../pepsi'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`}
          type="image/x-icon"
        />
        <title>Aldo Ponce - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.xl" pt={14}>
        <Box
          display={{ md: 'flex' }}
          pos={['relative', 'relative', 'relative', 'fixed']}
          w={['100%', '50%', '20%']}
          marginX={['auto', 'auto', '34%', 'auto']}
          zIndex={1}
          align="center"
        >
          <Box flexGrow={1} alignContent="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="90%"
              objectFit="cover"
              display="inline-bock"
              borderRadius="full"
              src="/images/aldo.jpg"
              alt="Profile Picture"
              mb="15px"
            />
            <Heading as="h2" variant="page-title">
              Aldo Ponce
            </Heading>
            <p>8th Semester Student</p>
            <List>
              <ListItem>
                <Link href="https://github.com/AldoPC" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoGithub />}
                  >
                    AldoPC
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/aldopc/"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoLinkedin />}
                  >
                    Aldo Ponce
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="mailto:aldoponcedelacruz@gmail.com" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoMail />}
                  >
                    aldoponcedelacruz@gmail.com
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box ml={['auto', 'auto', 'auto', '30%']}>
          <NoSsr>
            <Pepsi />
          </NoSsr>
        </Box>
        {children}
      </Container>
    </Box>
  )
}

export default Main
