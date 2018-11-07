import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarNav,
  Nav,
  NavItem,
  NavLink
} from 'mdbreact'; 
import "../css/NavigationBar.css";
import{ BrowserRouter } from "react-router-dom"

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
				<div className="navigation-bar">
					<Navbar dark expand="md">
						<NavbarBrand className="brand" style={{cursor:"default"}}><a href="http://www.krislentz.net">Home</a></NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<NavbarNav className="ml-auto" navbar>
								<NavItem className="ml-5">
									<a href="https://www.linkedin.com/in/kris-lentz/">LinkedIn</a>
								</NavItem>
								<NavItem className="ml-5">
									<a href="https://github.com/klentz87">Github</a>
								</NavItem>
							</NavbarNav>
						</Collapse>
					</Navbar>
				</div>
		)
	}

};

export default NavigationBar;