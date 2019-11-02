import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function FormSignUp(props) {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="name" placeholder="Name"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input type="email" className="form-control" id="surname" aria-describedby="emailHelp" placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormSignUp;