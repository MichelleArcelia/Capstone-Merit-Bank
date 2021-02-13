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
                        MERIT BANK CD
                </h1>

                </div>
            </div>




            < Sidebar />

            <div className='currentCards1'>

                <div class="card">
                    <img src='images/undraw_Invest_re_8jl5.svg' class="card-img-top" />
                    <div class="card-body">
                        <h1 className="Top-card-title">Michelle's CD Account Details</h1>
                        <p className="Top-card-text">
                            Merit Bank AdvantagePlus Banking®
        </p>
                        <p className="Top-card-text">
                            A good choice if you use direct deposit and want a straightforward banking account
        </p>
                    </div>
                </div>
            </div>



            <ul className="ListCards">

                <li className="cards_item">
                    <div className="CLEARcard_content"></div>
                </li>


                <Link to="/transfermoney">
                    <div className="money-box2">

                        <form id="moneyB2" action="" method="">
                            
                            <h2 className="card_title">TRANSFER MONEY</h2>

                        </form>
                    </div>
                </Link>



            </ul>







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



            </ul>






            <div className='transctions'>
                <h2>CD TRANSACTION ACTIVITY</h2>
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