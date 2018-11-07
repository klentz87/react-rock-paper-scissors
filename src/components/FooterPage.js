import React from 'react';
import "../css/FooterPage.css"
import { Col, Container, Row } from "mdbreact";

function FooterPage() {
	return (
		<div className="footer text-white font-small mt-5 pt-4">
		  <Container fluid className="text-center text-md-left">
		    <Row>
		      <Col md="6">
		      	<p>
		        	For more information about other project I've done, check out the following links.
		      	</p>
		      </Col>
		      
		      <Col md="3">
		      	<h5 className="title">Other Projects</h5>
		      	<ul className="pl-0">
		        	<li className="list-unstyled">
		          		<a href="http://www.krislentz.net">Home</a>
		        	</li>
		        	<li className="list-unstyled">
		          		<a href="#">React Contact List</a>
		        	</li>
		        	<li className="list-unstyled">
		          		<a href="#!">React Book Cataloger</a>
		        	</li>
		      	</ul>
		      </Col>
		      <Col md="3">
		      	<h5 className="title">Links</h5>
		      	<ul className="pl-0">
	            	<li className="list-unstyled">
	            		<a href="https://www.linkedin.com/in/kris-lentz/">LinkedIn</a>
		        	</li>
		        	<li className="list-unstyled">
						<a href="https://github.com/klentz87">Github Profile</a>	          		
		        	</li>
		      	</ul>
		      </Col>

		    </Row>
		  </Container>
		 
		  <div className="footer-copyright text-center py-4">
		    <Container fluid>
	      		&copy; {new Date().getFullYear()} Copyright:{" "}
      			<a href="https://www.krislentz.net"> Kris Lentz </a>
		    </Container>
		  </div>
		</div>
	)
}



export default FooterPage;