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
        



    <div className='currentCards1'>  

<div class="card">
  <img src='images/undraw_Goals_re_lu76.svg' class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>





<ul className='cards'> 

    <li className="cards_item">
        <div className="card_content">
        <h2 className="card_title">Current Checking Account Balance</h2>
        <p className="card_text2">$200,000</p>
        <p className="card_text">Available Funds</p>
        <button className="btn card_btn">More Details</button>
        </div>
    </li>

    <li className="cards_item">
        <div className="card_content">
        <h2 className="card_title">Current Checking Account Balance</h2>
        <p className="card_text2">$200,000</p>
        <p className="card_text">Available Funds</p>
        <button className="btn card_btn">More Details</button>
        </div>
    </li>

    </ul>

    <ul className='cards'> 

    <li className="cards_item">
        <div className="card_content">
        <h2 className="card_title">Current Checking Account Balance</h2>
        <p className="card_text2">$200,000</p>
        <p className="card_text">Available Funds</p>
        <button className="btn card_btn">More Details</button>
        </div>
    </li>


    <li className="cards_item">
        <div className="card_content">
        <h2 className="card_title">Current Checking Account Balance</h2>
        <p className="card_text2">$200,000</p>
        <p className="card_text">Available Funds</p>
        <button className="btn card_btn">More Details</button>
        </div>
    </li>




</ul>











</div> 





        
    );
}

export default DashboardAccounts




/*
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

                             
                                </div>
                            </Link>




                            </div>




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

                                  
                                </div>
                            </Link>





                            </div>




*/