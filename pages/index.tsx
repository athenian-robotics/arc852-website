import { Button, Card, Container, Row } from 'react-bootstrap'
import Layout from "../components/Layout";

const home = () => {
    return (
        <Layout>
            <Container className="md-container">
                <Container>
                    <h1>
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h1>
                    <p>
                        Get started by editing <code>pages/index.js</code>
                    </p>
                    <Container>
                        <Row className="justify-content-md-between">
                            <Card className="sml-card">
                                <Card.Body>
                                    <Card.Title>Documentation</Card.Title>
                                    <Card.Text>
                                        Find in-depth information about Next.js features and API.
                                    </Card.Text>
                                    <Button variant="primary" href="https://nextjs.org/docs">
                                        More &rarr;
                                    </Button>
                                </Card.Body>
                            </Card>
                            <Card className="sml-card">
                                <Card.Body>
                                    <Card.Title>Learn</Card.Title>
                                    <Card.Text>
                                        Learn about Next.js in an interactive course with quizzes!
                                    </Card.Text>
                                    <Button variant="primary" href="https://nextjs.org/learn">
                                        More &rarr;
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="justify-content-md-between">
                            <Card className="sml-card">
                                <Card.Body>
                                    <Card.Title>Examples</Card.Title>
                                    <Card.Text>
                                        Discover and deploy boilerplate example Next.js projects.
                                    </Card.Text>
                                    <Button
                                        variant="primary"
                                        href="https://github.com/vercel/next.js/tree/canary/examples"
                                    >
                                        More &rarr;
                                    </Button>
                                </Card.Body>
                            </Card>
                            <Card className="sml-card">
                                <Card.Body>
                                    <Card.Title>Deploy</Card.Title>
                                    <Card.Text>
                                        Instantly deploy your Next.js site to a public URL with
                                        Vercel.
                                    </Card.Text>
                                    <Button
                                        variant="primary"
                                        href="https://vercel.com/new?utm_source=github&utm_medium=example&utm_campaign=next-example"
                                    >
                                        More &rarr;
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </Layout>
    )
}

export default home