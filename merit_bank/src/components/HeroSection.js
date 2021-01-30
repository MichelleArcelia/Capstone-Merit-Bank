import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import "./modal.css";

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart 
}) {
    return (
        <>
            <div
                className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}>

                    <div className="container">

                    <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{ topLine }
                                </div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{ headline }</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> { description } </p>
                                <Link to="/login">
                                    <Button className="popupLogin" buttonSize='btn--wide' buttonColor='blue'>{ buttonLabel }
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>





            <div className="modal" id="email-modal">
                <div className="modal-content">
                    <span className="close-btn">&times;</span>
                    <div className="modal-content-left">
                        <img src="images/undraw_My_universe_re_txot.svg" alt=""/>
                    </div>
                    <div className="modal-content-right">
                        <form action="/" method="GET" className="modal-form" id="form">
                            <h1>GET started with us today! Create your account by filling out the information below.</h1>

                                <div className="form-validation">
                                    <input type="text" className="modal-input" id="fname" name="fname" placeholder="Enter your First Name"/>
                                    <p>Error Message</p>
                                </div>


                                <div className="form-validation">
                                    <input type="text" className="modal-input" id="lname" name="lname" placeholder="Enter your Last Name"/>
                                    <p>Error Message</p>
                                </div>


                                <div className="form-validation">
                                    <input type="email" className="modal-input" id="email" name="email" placeholder="Enter your Email"/>
                                    <p>Error Message</p>
                                </div>


                                <div className="form-validation">
                                    <input type="password" className="modal-input" id="password" name="password" placeholder="Enter your password"/>
                                    <p>Error Message</p>
                                </div>


                                <div className="form-validation">
                                    <input type="password" className="modal-input" id="password-confirm" name="password" placeholder="Confirm your password"/>
                                    <p>Error Message</p>
                                </div>
                                
                                <input type="submit" className="modal-input-btn" value="Sign Up"/>

                                <span className="modal-input-login"> Already have an account? Login <a href="/">here</a></span>
                        </form>
                    </div>
                </div>
            </div>






        </>
    );
}

export default HeroSection;
