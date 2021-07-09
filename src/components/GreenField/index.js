import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function GreenField(){

    const GreenSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    return(
        <>
            <Container className="mt-3">
                <Card style={{borderColor: "green", borderWidth: "3px"}}>
                    <Row>
                        <Col className="d-flex justify-content-evenly">                        
                            {GreenSquares.map(item => {
                                return(
                                   <>
                                    <div key={item} className="gameSquare">{item}</div>
                                    <div className="align-self-center">≥</div>
                                    </>
                                   
                                )
                            })}
                        </Col>

                    </Row>

                </Card>
            </Container>
        </>
    )
}

export default GreenField