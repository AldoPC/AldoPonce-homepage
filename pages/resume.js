import { useState } from 'react'
import { Container, LinkBox, LinkOverlay, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Document, Page, pdfjs } from 'react-pdf'
import pdf from '../pdf-worker'

pdfjs.GlobalWorkerOptions.workerSrc = pdf

export default function Resume() {
  const [file, setFile] = useState('./resume.pdf')
  const [numPages, setNumPages] = useState(null)

  function onFileChange(event) {
    setFile(event.target.files[0])
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  return (
    <Layout>
      <Container>
        <Box ml={['auto', 'auto', 'auto', '30%']}>
          <LinkBox cursor="pointer">
            <LinkOverlay
              href="https://drive.google.com/file/d/1_IGAlOXBYQRBzJrn4YdoDFiAmyrtdp1u/view"
              target="_blank"
            >
              <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from({ length: numPages }, (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                ))}
              </Document>
            </LinkOverlay>
          </LinkBox>
        </Box>
      </Container>
    </Layout>
  )
}
