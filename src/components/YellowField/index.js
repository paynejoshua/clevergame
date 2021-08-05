import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function YellowField(props){

    const YellowChoices = [3, 6, 5, "X", 2, 1, "X", 5, 1, "X", 2, 4, "X", 3, 4, 6];


    return(
        
            <Container onClick={props.onClick} className="mt-3">
                <Card style={{width: "18rem", borderColor: "#ffd900", borderWidth: "3px"}}>
                    <Row>
                        {YellowChoices.map((item, index) =>{
                            return(
                            <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3} key={index}>
                               <div className="gameSquare d-flex justify-content-center">
                                {item}
                               </div>
                                
                            </Col>
                            )
                        })}
                    </Row>
                </Card>
            </Container>
       
    )
}

export default YellowField