import React from 'react'; 
import {render} from "react-dom";
import NavigationButtonComponent from "../component/NavigationButtonComponent";
import {Row,Col,Container} from "react-bootstrap";

class Navigation extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Container>
                    <Col>
                        <Row className="justify-content-md-center"> 
                            <NavigationButtonComponent title="ADD POST"/>
                        </Row>
                        <Row className="justify-content-md-center"> 
                            <NavigationButtonComponent title="SEE MY POST"/>
                        </Row>
                        <Row className="justify-content-md-center"> 
                            <NavigationButtonComponent title="SEE ALL POST"/>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }

}
export default Navigation;