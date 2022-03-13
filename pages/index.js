import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
  Grid,
  GridItem,
  Text,
  UnorderedList,
  ListItem,
  List,
  Link,
  Button
} from '@chakra-ui/react'
import { IoMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ExperienceBold } from '../components/experience'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hi, I&apos;m Aldo Ponce. Currently studying for a bachelor's degree in
          Computer Science and Technology at Tecnológico de Monterrey CCM.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
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
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="200px"
              display="inline-bock"
              borderRadius="full"
              src="/images/aldo.jpg"
              alt="Profile Picture"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <Text fontSize="xl" fontWeight="700">
            Software Engineering Intern
          </Text>
          <Text fontSize="lg" fontWeight="600">
            Finance Assistant Application
          </Text>
          <Paragraph>December 2020 - March 2022</Paragraph>
          <Box pl="25px">
            <UnorderedList>
              <ListItem>
                <ExperienceBold>Technologies used:</ExperienceBold> Spring Tool
                Suite, VSCode, SQLTools, Maven, Tomcat, NPM.
              </ListItem>
              <ListItem>
                <ExperienceBold>Back-end:</ExperienceBold> Java 8, Node.js,
                Express.
              </ListItem>
              <ListItem>
                <ExperienceBold>Front-end:</ExperienceBold> ZK Framework, Keikai
                Spreadsheets, React, Java 8.
              </ListItem>
              <ListItem>
                <ExperienceBold>Database:</ExperienceBold> Oracle Database.
              </ListItem>
            </UnorderedList>
          </Box>
          <Text fontSize="md">
            Finance tool that shows the information from a database as a report
            on an online spreadsheet depending on the parameters requested.
          </Text>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Software Projects
          </Heading>
          <Box pb="10px">
            <Text fontSize="xl" fontWeight="700">
              iOS Mobile Application (Spotifind)
            </Text>
            <Text fontSize="lg" fontWeight="600">
              iOS app that gives you songs recommendations based on your profile
            </Text>
            <Box pl="25px">
              <UnorderedList>
                <ListItem>
                  <ExperienceBold>Technologies used:</ExperienceBold> Xcode,
                  CocoaPods.
                </ListItem>
                <ListItem>
                  <ExperienceBold>Back-end:</ExperienceBold> Spotify API.
                </ListItem>
                <ListItem>
                  <ExperienceBold>Front-end:</ExperienceBold> Swift,
                  Objective-C.
                </ListItem>
              </UnorderedList>
            </Box>
            <Text fontSize="md" pb="15px">
              Developed an application where one can use its Spotify account to
              get personalized recommendations and create playlists based on
              those recommendations by using the Spotify API. It has the ability
              to play a preview of the recommended song and includes integration
              with Apple Watch to show the song playing at the moment.
            </Text>
          </Box>

          <Box pb="10px">
            <Text fontSize="xl" fontWeight="700">
              Flutter Application (Shuk shuk)
            </Text>
            <Text fontSize="lg" fontWeight="600">
              Flutter app that builds an album of images from social media and
              phone storage
            </Text>
            <Box pl="25px">
              <UnorderedList>
                <ListItem>
                  <ExperienceBold>Technologies used:</ExperienceBold> Android
                  Studio, VSCode, Emulator AVD & Firebase.
                </ListItem>
                <ListItem>
                  <ExperienceBold>Front-end:</ExperienceBold> Material UI,
                  Flutter, Dart.
                </ListItem>
                <ListItem>
                  <ExperienceBold>Database:</ExperienceBold> Firestore.
                </ListItem>
              </UnorderedList>
            </Box>
            <Text fontSize="md" pt="5px">
              Developed an application capable of building an album of images
              from social media and phone storage. Option to use social media
              accounts for authentication.
            </Text>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <UnorderedList>
            <ListItem>
              <ExperienceBold>Languajes:</ExperienceBold> Java, JavaScript,
              Python, Swift, Dart.
            </ListItem>
            <ListItem>
              <ExperienceBold>Frameworks:</ExperienceBold> React, Express, ZK
              Framework, Flutter.
            </ListItem>
            <ListItem>
              <ExperienceBold>Tools & Platforms:</ExperienceBold> Node.js,
              Firebase.
            </ListItem>
          </UnorderedList>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <Text fontSize="xl" fontWeight="700">
            B.S. Computer Science and Technology
          </Text>
          <Text fontSize="lg" fontWeight="600">
            Tecnológico de Monterrey
          </Text>
          <Paragraph>Aug 2018 - Exp. Dec 2022</Paragraph>
          <Box pl="25px">
            <UnorderedList>
              <ListItem>90/100 GPA</ListItem>
              <ListItem>
                <ExperienceBold>Relevant coursework:</ExperienceBold> Data
                Structures, Operating Systems, Analysis and Design of
                Algorithms, Programming Languages, Advanced Database Systems,
                Big Data, Web Applications Development, Software Quality and
                Testing.
              </ListItem>
            </UnorderedList>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Awards
          </Heading>

          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontWeight="700">2020</Text>{' '}
              <Text as="i" fontSize="md">
                Monterrey, MX
              </Text>
            </GridItem>
            <GridItem colSpan={5}>
              <Text fontWeight="700">
                First Place in Trust dimension’s Challenge at HackMTY
              </Text>
              Document and identify the vulnerabilities of a webpage through
              pentesting and try to gaing access to it.
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontWeight="700">2019</Text>{' '}
              <Text as="i" fontSize="md">
                Mexico, MX
              </Text>
            </GridItem>
            <GridItem colSpan={5}>
              <Text fontWeight="700">
                Second Place in GE Healthcare’s Challenge at HackMx
              </Text>
              Easy monitoring and adminstration of an incubator by using word
              abbreviations and easy‐to‐navigate UI.
            </GridItem>
          </Grid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
