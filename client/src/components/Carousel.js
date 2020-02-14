import React from 'react';
import {
	Container, Row, Col, Form, Input, Button, Navbar, Nav,
	NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
	DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Carousel, CarouselItem, Image, Figure, Caption, Card, ListGroup, Modal
  } from 'react-bootstrap'; 
import './Carousel.css';

const Example = () => {
	return (
		<div>
			<Carousel className = "carousel">
				<Carousel.Item className = "carouselitem">
					<img
					className = "img"
					src = {process.env.PUBLIC_URL + 'jpeg-3.jpg'}
					alt = "first slide"
					/>
				<Carousel.Caption className = "carouselcaption">
					<h3>Chrismon Care Landscaping!</h3>
					<p>Landscaping Services accredited by the Better Business Bureau</p>
				</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className = "carouselitem">
					<img
					className = "img"
					src = {process.env.PUBLIC_URL + 'jpeg-2.jpg'}
					alt = "first slide"
					/>
				<Carousel.Caption className = "carouselcaption">
					<h3>Chrismon Care Landscaping!</h3>
					<p>Landscaping Services accredited by the Better Business Bureau</p>
				</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className = "carouselitem">
					<img
					className = "img"
					src = {process.env.PUBLIC_URL + 'jpeg-4.jpg'}
					alt = "first slide"
					/>
				<Carousel.Caption className = "carouselcaption">
					<h3>Chrismon Care Landscaping!</h3>
					<p>Landscaping Services accredited by the Better Business Bureau</p>
				</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Example;