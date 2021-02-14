import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import '../Checking/CheckingDetails.css';
import { Link } from 'react-router-dom';

function CDDetails() {
    return (

        <>

            <div className='HeroContainerDash'>
                <video className='VideoBg' loop autoPlay>
                    <source src='videos/oil.mp4' type="video/mp4" />
                </video>

                <div className='HeroContent'>

                    <h1 className='HeroH1'>
                        MERIT BANK CERTIFICATE OF DEPOSIT 
                </h1>

                </div>
            </div>




            < Sidebar />

            <div className='currentCards1'>

                <div class="card">
                    <img src='images/undraw_Invest_re_8jl5.svg' class="card-img-top" />
                    <div class="card-body">
                        <h1 className="Top-card-title">Certificate of Deposit Account Details</h1>
                        <p className="Top-card-text">
                            Merit Bank AdvantagePlus Banking®
        </p>
                        <p className="Top-card-text">
                        Looking for a slightly longer term—and slightly higher rate? Because extraordinary is always within reach.        </p>
                    


                        <h1 className="IRAwarning">
                        When closing, CDs balances are transferred

                        </h1>
                        <h1 className="IRAwarning">
                        to either savings or checking account.

                        </h1>
                    </div>
                </div>
            </div>



            <ul className='ListCards'>
                <li className="cards_item">
                    <div className="CLEARcard_content">
                    </div>
                </li>


                <li className="cards_item">
                    <div className="card_content">
                        <h2 className="card_title">CD Balance</h2>
                        <p className="card_text2">$7,000</p>
                        <p className="card_text">Locked Funds</p>

                    </div>
                </li>


                <li className="cards_item">
                    <div className="card_content">
                        <h2 className="card_title">Suggested Optimal</h2>
                        <h2 className="card_title">CD Calculator</h2>

                        <p className="card_text">Initial Deposit</p>

                      <input class="account_dropdown3" placeholder="$" name="amount" type="number" step="0.01" min="0.01" required="required" maxLength="6"/>

                        <p className="card_text">Term Length</p>
                        <p className="card_text">Interest Rate</p>
 
                        <Link to="#" className='Accounts__container-card'>
            <button className="btn card_btn">CALCULATE</button>
            </Link>

                    </div>
                </li>

            </ul>






            <div className='transctions'>
                <h2>CERTIFICATE OF DEPOSIT TRANSACTION ACTIVITY</h2>
                <table>

                    <thead>
                        <tr>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>AMOUNT</th>
                            <th>INTEREST RATE</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">CD</td>
                            <td data-column="AMOUNT">$1000</td>
                            <td data-column="INTEREST RATE">2.5%</td>
                            <td data-column="DATE">02/03/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Checking</td>
                            <td data-column="TO">CD</td>
                            <td data-column="AMOUNT">$2000</td>
                            <td data-column="INTEREST RATE">2.5%</td>
                            <td data-column="DATE">02/06/2021</td>
                        </tr>
                        <tr>
                            <td data-column="FROM">Savings</td>
                            <td data-column="TO">CD</td>
                            <td data-column="AMOUNT">$5000</td>
                            <td data-column="INTEREST RATE">2.5%</td>
                            <td data-column="DATE">02/09/2021</td>
                        </tr>

                    </tbody>
                </table>

            </div>


        </>
    )
}

export default CDDetails



/* 

            <Link to="/transfermoney" >
                <button className="Transbtn">Transfer Money</button>
            </Link>


*/