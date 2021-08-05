import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function GreenField(){

    const GreenSquares = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]

    return(
        <>
            <Container className="mt-3">
                <Card style={{borderColor: "green", borderWidth: "3px"}}>
                    <Row>
                        <Col className="d-flex justify-content-evenly">                        
                            {GreenSquares.map((item, index) => {
                                return(
                                   <div key={index}>
                                    <div className="gameSquare d-inline-block">{item}</div>
                                    {
                                        item === 6 ? <></> : <div className="align-self-center d-inline-block">≥</div>
                                    }
                                    
                                    </div>
                                   
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