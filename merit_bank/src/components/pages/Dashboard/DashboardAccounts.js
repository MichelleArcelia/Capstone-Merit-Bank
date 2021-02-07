import React from 'react'
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa'
import { Button } from '../../Button'
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { RiSafeLine } from 'react-icons/ri';
import { RiSafe2Line } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
//import './Pricing.css';
import './Dashboard.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Sidebar from '../../Sidebar/Sidebar';


function DashboardAccounts() {
    return (
        
            <div>
                <div className="pricing__section2">
                    <div className="pricing__wrapper">

                        <div className="pricing__container">


                            <Link to="/checking" className='Accounts__container-card'>
                                <div className="Accounts__container-cardInfo">

                                <div className='Accounts_UsableFunds'>
                                    <div className="icon">
                                        <RiSafe2Line />
                                    </div>

                                    <h3>Checking Account</h3>
                                    <h4>$52,452</h4>
                                    <p> Available Funds </p>
                                    </div>

                                    <Button buttonSize='btn--small' buttonColor='blue'>
                                    arrow
                                </Button>
                                </div>
                            </Link>




                            <Link to="/savings" className='Accounts__container-card'>
                                <div className="Accounts__container-cardInfo">

                                <div className='Accounts_UsableFunds'>
                                    <div className="icon">
                                        <RiSafe2Line />
                                    </div>

                                    <h3>Savings Account</h3>
                                    <h4>$100,000</h4>
                                    <p> Available Funds </p>
                                    </div>

                                    <Button buttonSize='btn--small' buttonColor='blue'>
                                    arrow
                                </Button>
                                </div>
                            </Link>









                            <Link to="/cdaccount" className='Accounts__container-card'>
                                <div className="Accounts__container-cardInfo">

                                <div className='Accounts_UsableFunds'>
                                    <div className="icon">
                                        <RiSafeLine />
                                    </div>

                                    <h3>CD Account</h3>
                                    <h4>$300,000</h4>
                                    <p> Locked Funds </p>
                                    </div>

                                    <Button buttonSize='btn--small' buttonColor='blue'>
                                    arrow
                                </Button>
                                </div>
                            </Link>








                            <Link to="/iraaccount" className='Accounts__container-card'>
                                <div className="Accounts__container-cardInfo">

                                <div className='Accounts_UsableFunds'>
                                    <div className="icon">
                                        <RiSafeLine />
                                    </div>

                                    <h3>IRA Account</h3>
                                    <h4>$67,983</h4>
                                    <p> Locked Funds </p>
                                    </div>

                                    <Button buttonSize='btn--small' buttonColor='blue'>
                                    arrow
                                </Button>
                                </div>
                            </Link>





                        </div>
                    </div>



                </div>
            </div>
        
    );
}

export default DashboardAccounts
