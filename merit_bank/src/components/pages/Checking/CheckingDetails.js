import React from "react";
import TransferM from "../TransferM/TransferM";
import Sidebar from "../../Sidebar/Sidebar";
import "../../pages/Dashboard/Dashboard.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "../Checking/CheckingDetails.css";
import { Link } from "react-router-dom";
import DashboardElements from "../../pages/Dashboard/DashboardElements";
import "../TransferM/TransferM.css";
import ReactPlayer from "react-player";

function CheckingDetails() {
  return (
    <>
      <div className="HeroContainerDash">
        <video className="VideoBg" loop autoPlay>
          <source src="videos/oil.mp4" type="video/mp4" />
        </video>

        <div className="HeroContent">
          <h1 className="HeroH1">MERIT BANK CHECKING</h1>
        </div>
      </div>

      <Sidebar />


      <div className='currentCards1'>

        <div class="card">
          <img src='images/undraw_Payments_re_77x0.svg' class="card-img-top" />
          <div class="card-body">
            <h1 className="Top-card-title">Checking Account Details</h1>
            <p className="Top-card-text">Merit Bank AdvantagePlus Banking®</p>
            <p className="Top-card-text">No minimums, no fees, no worries. Access to 16,000 ATMs and more than 4,700 branches</p>

            <h2 className="IRAwarning">
              When closing the checking account,

                        </h2>
            <h2 className="IRAwarning">
              the balance has to be transferred to the savings account
              only

                        </h2>

          </div>
        </div>
      </div>


      <ul className="ListCards">
        <li className="cards_item">
          <div className="CLEARcard_content"></div>
        </li>

        <li className="cards_item">
          <div className="card_content">
            <h2 className="card_title">Personal Checking Balance</h2>
            <p className="card_text2">$0</p>
            <p className="card_text">Available Funds</p>
          </div>
        </li>
      </ul>

      <div className="transctions">
        <h2>Personal Checking Transaction Activity</h2>
        <table>
          <thead>
            <tr>
              <th>FROM</th>
              <th>TO</th>
              <th>AMOUNT</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-column="FROM">Checking</td>
              <td data-column="TO">Savings</td>
              <td data-column="AMOUNT">$2700</td>
              <td data-column="DATE">02/11/2021</td>
            </tr>
            <tr>
              <td data-column="FROM">Checking</td>
              <td data-column="TO">Savings</td>
              <td data-column="AMOUNT">$850</td>
              <td data-column="DATE">02/05/2021</td>
            </tr>
            <tr>
              <td data-column="FROM">Checking</td>
              <td data-column="TO">Savings</td>
              <td data-column="AMOUNT">$500</td>
              <td data-column="DATE">02/02/2021</td>
            </tr>
          </tbody>
        </table>

        <ul className="ListCards">
          <li className="cards_item">
            <div className="CLEARcard_content"></div>
          </li>

          <li className="cards_item">
            <div className="card_content">
              <h2 className="card_title">DBA Checking Balance</h2>
              <p className="card_text2">$0</p>
              <p className="card_text">Available Funds</p>
            </div>
          </li>
        </ul>

        <div className="transctions">
          <h2>DBA Checking Transaction Activity</h2>
          <table>
            <thead>
              <tr>
                <th>FROM</th>
                <th>TO</th>
                <th>AMOUNT</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-column="FROM">Checking</td>
                <td data-column="TO">Savings</td>
                <td data-column="AMOUNT">$15,800</td>
                <td data-column="DATE">02/13/2021</td>
              </tr>
              <tr>
                <td data-column="FROM">Checking</td>
                <td data-column="TO">Savings</td>
                <td data-column="AMOUNT">$70</td>
                <td data-column="DATE">02/08/2021</td>
              </tr>
              <tr>
                <td data-column="FROM">Checking</td>
                <td data-column="TO">Savings</td>
                <td data-column="AMOUNT">$450</td>
                <td data-column="DATE">01/30/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CheckingDetails;


/*


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

      */