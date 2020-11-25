import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTrip from '../AddTrips/AddTrip'

import { Link } from 'react-router-dom';




class AdminPage extends Component {
constructor(props){
    super(props)
    this.state={
        isAdmin:''
    }
   
}
render(){
    return(
        <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center"> <br/><br/> <br/><br/>
              <h2 className="section-heading text-uppercase"> Admin Page</h2>
            </div>
          </div> <br/><br/>
          <div className="row">
          <Link to='/AddTrip' className='btn-mobile'>
            <button>Add Trip</button>
        </Link>
          </div>
        </div>
      </section> 
    )
}
}

export default AdminPage;