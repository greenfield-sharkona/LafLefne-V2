/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "react-bootstrap";

class CardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    render() {
        return (

            
            //     <li className='cards__item' style={{ "backgroundColor": 'white' }}>
            //         <Link className='cards__item__link' to={{
            //             pathname: this.props.path,
            //             state: {
            //                 trip: this.props.trip
            //             },
            //             getup: this.props.getup,
            //         }}>
            //             <figure className='cards__item__pic-wrap' data-category={this.props.label}>
            //                 <img
            //                     className='cards__item__img'
            //                     alt='Travel Image'
            //                     src={this.props.src}
            //                 />
            //             </figure>
            //             <div className='cards__item__info'>
            //                 <h5 className='cards__item__text'>{this.props.text}</h5>
            //             </div>
            //         </Link>
            //     </li>
            <div className="card">
            <Link className='link' to={{
                     pathname: this.props.path,
                     state: {
                         trip: this.props.trip
                     },
                     getup: this.props.getup,
                 }}>
         <img className = 'img' src={this.props.src} alt="Travel Image" style={{ "hight": '50%'}}/>
         </Link>
         <div className="container">
           <h4><b>{this.props.label}</b></h4> 
           <p>{this.props.text}</p> 
           <button>click</button>
         </div>
       </div>
            )
    };
}

export default CardItem;