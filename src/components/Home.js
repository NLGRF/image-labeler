import React, {Component} from 'react';

import {Title, Container, Hero, SubTitle} from 'reactbulma'
import Login from './Login';

class Home extends Component {
    render() {
        return (
            <div id="contrainer">
                <Hero primary className="hero-head">
                    <Hero.Body>
                        <Container>
                            <Title>
                                Welcome to Datasets Collector & Labeler Tool.
                            </Title>
                            <SubTitle>
                                For collect & label data for root canal detect with deep nerual networks.
                            </SubTitle>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Login/>
                <p>Copyright © 2019</p>
            </div>
        );
    }
}
export default Home;