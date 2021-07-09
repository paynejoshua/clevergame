import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DiceRoller from "../DiceRoller"
import YellowField from "../YellowField";
import BlueField from "../BlueField";
import GreenField from "../GreenField"
import OrangeField from "../OrangeField"
import PurpleField from "../PurpleField";


function GameCard(){   

    return (
        <>
            <Container className="d-flex justify-content-center mt-5" >
                <Card style={{background: "rgba(255, 255, 255, 0.25)"}}>

                
                <Row className="mt-5 mb-5">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="d-flex justify-content-center" >
                                <DiceRoller />
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    
                                <YellowField />
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                    
                                <BlueField />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    
                                <GreenField />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    
                                <OrangeField />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    
                                <PurpleField />
                    </Col>

                </Row>
                </Card>
            </Container>
        </>
    )
}

export default GameCard