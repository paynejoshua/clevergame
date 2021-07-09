import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function BlueField(){

    const BlueChoices = ["x", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    return(
        <>
            <Container className="mt-3">
                <Card style={{width: "18rem", borderColor: "#0af", borderWidth: "3px"}}>
                    <Row>
                        {BlueChoices.map(item =>{
                            return(
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3} key={item}>
                               <div className="gameSquare d-flex justify-content-center">
                                {item}
                               </div>
                                
                            </Col>
                            )
                        })}
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default BlueField