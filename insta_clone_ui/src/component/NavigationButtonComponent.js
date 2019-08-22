import React from "react";
import {render} from "react-dom";
import {Button} from "react-bootstrap";

class NavigationButtonComponent extends React.Component{
    render(){
        return(
            <div>
            <Button variant="primary" size="lg" block>{this.props.title}</Button>
            </div>
        );
    }
}

export default NavigationButtonComponent;