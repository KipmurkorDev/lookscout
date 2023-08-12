import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


function Home() {
    return (
        <Container fluid className='px-0'>
            <Container fluid className='hero-container'>
                <Row className='text-white pt-5'>
                    <Col className='w-50'>
                        <h1> Your Supercharged Design Workflow.</h1>
                        <p> We’ve been told it is not possible to overachieve our customers’ expectations.
                            We have not reinvented the wheel, we decided to build upon it.
                        </p>
                        <Button className='my-5'> Get Started</Button>
                        <Row>
                            <h6> Who supports us</h6>
                            <p> <span> Slack</span> <span> Github</span><span> Netfily</span><span> Paypal</span></p>
                        </Row>
                    </Col>
                    <Col>
                        Hello
                    </Col>

                </Row>



            </Container>
            <Container>
                <Col>

                    <Row className='text-center'>
                     <h1> Messaging for all</h1>
                     <p> User generated content in real-time will have multiple touchpoints for offshoring.</p>
                    
                    </Row>

                </Col>

                helllo
            </Container>
        </Container>
    )
}

export default Home