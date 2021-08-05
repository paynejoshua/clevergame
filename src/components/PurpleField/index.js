import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function PurpleField(){

    const PurpleSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    return(
        <>
            <Container className="mt-3">
                <Card style={{borderColor: "purple", borderWidth: "3px"}}>
                    <Row>
                        <Col className="d-flex justify-content-evenly">                        
                            {PurpleSquares.map(item => {
                                return(
                                   <div key={item}>
                                    <div className="gameSquare d-inline-block"></div>
                                   
                                    {
                                    item === 11
                                    ? <></>
                                    :
                                    <div className="align-self-center d-inline-block">></div>
                                    
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

export default PurpleField