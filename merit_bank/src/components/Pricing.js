import React from 'react'
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa'
import { Button } from './Button'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';


function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h1 className="pricing__heading">
                            Bank Account Possibilities
                    </h1>
                        <div className="pricing__container">



                            <Link to="/login" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Savings Accounts</h3>
                                    <h4>Info here</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 transctions</li>
                                        <li>cash back</li>
                                        <li>hdshfkhfdsjhf</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        CHOOSE ME
                                </Button>
                                </div>
                            </Link>




                            <Link to="/login" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Checking Account</h3>
                                    <h4>Info</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>200 transctions</li>
                                        <li>cash back</li>
                                        <li>hdshfkhfdsjhf</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='green'>
                                        CHOOSE ME
                                </Button>
                                </div>
                            </Link>



                            <Link to="/login" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize />
                                    </div>
                                    <h3>IRA Accounts</h3>
                                    <h4>Info Here</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>200 transctions</li>
                                        <li>cash back</li>
                                        <li>hdshfkhfdsjhf</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        CHOOSE ME
                                </Button>
                                </div>
                            </Link>



                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default Pricing
