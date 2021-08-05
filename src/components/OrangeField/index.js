import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function OrangeField(){
    
    const numSquares = 11
    return(
        <>
            <Container className="mt-3">
                <Card style={{borderColor: "orange", borderWidth: "3px"}}>
                    <Row>
                        <Col className="d-flex justify-content-evenly">                        
                            {[...Array(numSquares)].map((item, index) => {
                                return(
                                   <div key={index}>
                                        <div  className="gameSquare"></div>
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

export default OrangeField