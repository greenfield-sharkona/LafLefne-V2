/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class CardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    render() {
        return (

            <Card>
                {/* <Link to={{
                    pathname: this.props.path,
                    state: {
                        trip: this.props.trip
                    },
                    getup: this.props.getup,
                }}> */}
                <Card.Img variant="top" src={this.props.src} />
                {/* <Link /> */}
                <Card.Body>
                    <Card.Title>{this.props.label}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                    <Button id='button' variant="outline-warning">CANCEL YOUR TRIP </Button>
                </Card.Body>
            </Card>

        )
    };
}

export default CardItem;