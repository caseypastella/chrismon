import React, {Component} from 'react';
import {Container, Media, Button, Row, Col} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Services.css';



const Services = (props) => {
    return (
        <div> 
                <Media>
                    <Media left top>
                        <Media className = "media1" object src = {process.env.PUBLIC_URL + '/jpeg-10.jpg'} alt = "Placeholder" />
                    </Media>
                    <Media body className = "mediabody">
                        <Media heading className = "mediaheading">
                            Service 1
                        </Media>
                            Service details
                    </Media>
                </Media>
                <Media className = "mt-1">
                    <Media left middle>
                        <Media className = "media2" object src = {process.env.PUBLIC_URL + '/jpeg-10.jpg'} alt = "Placeholder" />
                    </Media>
                    <Media body className = "mediabody">
                        <Media heading className = "mediaheading">
                            Service 1
                        </Media>
                            Service details
                    </Media>
                </Media>
                <Media className = "mt-1">
                    <Media left bottom>
                        <Media className = "media3" object src = {process.env.PUBLIC_URL + '/jpeg-10.jpg'} alt = "Placeholder" />
                    </Media>
                    <Media body className = "mediabody">
                        <Media heading className = "mediaheading">
                            Service 1
                        </Media>
                            Service details
                    </Media>
                </Media>
                <Button color = "secondary" size= "lg block">
                    Get an estimate today!
                </Button>
        </div>
    );
}

export default Services; 