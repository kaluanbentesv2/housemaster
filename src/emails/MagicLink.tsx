import { Body, Button, Container, Head, Html, Section, Text } from "jsx-email"
import * as React from "react"

export const TemplateName = "MagicLink"

export type TemplateProps = {
  url: string
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  marginBottom: "64px",
  padding: "20px 0 48px",
}

const box = {
  padding: "0 48px",
}

const paragraph = {
  color: "#777",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
}

const button = {
  backgroundColor: "#777",
  borderRadius: "5px",
  color: "#fff",
  display: "block",
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center" as const,
  textDecoration: "none",
  width: "100%",
  padding: "10px",
}

export const MagicLink = ({ url }: TemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Text style={paragraph}>
            Para entrar no <b>Housemaster</b> clique no link abaixo.
          </Text>
          <Button style={button} href={url}>
            Entrar
          </Button>
        </Section>
      </Container>
    </Body>
  </Html>
)
