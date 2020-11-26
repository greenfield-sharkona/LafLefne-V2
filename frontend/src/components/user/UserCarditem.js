import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class CardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    

    this.handelOnClick=this.handelOnClick.bind(this)
  
    }

      handelOnClick = async (e) => {
        e.preventDefault();
        // console.log("ourCLient", this.state)
        axios.delete('/deleteTrip')
          .then((response)=>{
            console.log(response)
          })
        }
        
    render() {
        return (
            <Card>
                <Link to={{
                    pathname: this.props.path,
                    state: {
                        trip: this.props.trip
                    },
                    getup: this.props.getup,
                }}>
                <Card.Img variant="top" src={this.props.src} />
                </Link >
                <Card.Body>
                    <Card.Title>{this.props.label}  hello </Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                    <Button  onClick={this.handelOnClick} id='button' variant="outline-warning">CANCEL YOUR TRIP </Button>
                </Card.Body>
            </Card>
        )
    };
}
export default CardItem;
