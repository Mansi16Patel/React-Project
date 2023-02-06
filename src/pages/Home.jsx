import React from "react";
import { Container,Row,Col } from "reactstrap";
import '../styles/home.css';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from "../shared/Subtitle";


const Home = () => {
    return ( 
        <>
        <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero__subtitle d-flex align-items-center">
                            <Subtitle subtitle={'Know Before You Go '} />
                            <img src={worldImg}></img>
                        </div>
                        <h1>Traveling opens the door to creating 
                        <span className="highlight"> memories</span></h1>
                        <p>Travel takes us out of our comfort zones and inspires us to see, taste and try new things.
                         It constantly challenges us, not only to adapt to and explore new surroundings,
                          but also to engage with different people, to embrace adventures as they come and to share new and
                           meaningful experiences with friends and loved ones. </p>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box">
                        <img src={heroImg} alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                <div className="hero__img-box mt-4">
                    <video src={heroVideo} alt="" controls/>
                </div>
            </Col>
            <Col lg='2'>
            <div className="hero__img-box mt-5" >
                <img src={heroImg02} alt="" />
            </div>
        </Col>
            </Row>
        </Container>
       </section>

    </>
    );
};
 
export default Home;