import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarAdmin from '../Homepage/NavbarAdmin-login'


class AdminPage extends Component {
constructor(props){
    super(props)
    this.state={
        isAdmin:''
    }
   
}
render(){
    <NavbarAdmin/>
    return(
        <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center"> <br/><br/> <br/><br/>
              <h2 className="section-heading text-uppercase"> Admin Page</h2>
            </div>
          </div> <br/><br/>
          <div className="row">
          </div>
        </div>
      </section> 
    )
}
}

export default AdminPage;