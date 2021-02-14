import React, { useState, alert } from "react";
import "../Checking/CheckingDetails.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import "../TransferM/TransferM.css";
import "../Form/Form.css";
import useForm from "../Form/useForm";
import validate from "../Form/validateInfo";
import FormSignup from "../Form/FormSignup";
import FormSuccess from "../Form/FormSuccess";

function TransferM() {
  const Example = (props) => {};




  
  return (
    <>
      <div className="HeroContainerDash">
        <video className="VideoBg" loop autoPlay>
          <source src="videos/video.mp4" type="video/mp4" />
        </video>

        <div className="HeroContent">
          <h1 className="HeroH1">TRANSFER MONEY</h1>
        </div>
      </div>

      <Sidebar />

      <div class="services" id="services">
        <div class="services__wrapper">
          <div class="services__card">
          <img src='images/Flogo_NavBar-FullColor.png' className="img-top" />
            <p>Secure. Fast. Simple. Anytime.</p>

            <div className="money-box">
              
              <form id="moneyB" action="" method="">
              <h2>AMOUNT</h2>
                  <label for="amount"></label>
                  <div className="flex">
                      <span className="currency">$</span>
                      <input class="account_dropdown2" name="amount" type="number" step="0.01" min="0.01" required="required" maxLength="6"/>
                      <h4 className="flex">Payment amount must be $0.01 or more</h4>
                  </div>
              </form>
            </div>
            
            <h2>FROM</h2>
            <div>
              <select class="account_dropdown">
                <option value="Personal Checking" selected>Personal Checking </option>
                <option value="DBA Checking">DBA Checking</option>
                <option value="Savings">Savings</option>
                <option value="Certificate of Deposit">Certificate of Deposit</option>
                <option value="Rollover IRA">Rollover IRA</option>
                <option value="Roth IRA">Roth IRA</option>
                <option value="Regular IRA">Regular IRA</option>
              </select>
            </div>

            <h2>TO</h2>
            <div>
              <select class="account_dropdown">
              <option value="Personal Checking">Personal Checking </option>
              <option value="DBA Checking">DBA Checking</option>
                <option value="Savings" selected>Savings</option>
                <option value="Certificate of Deposit">Certificate of Deposit</option>
                <option value="Rollover IRA">Rollover IRA</option>
                <option value="Roth IRA">Roth IRA</option>
                <option value="Regular IRA">Regular IRA</option>
              </select>
            </div>

            <div class="services__btn">
              <button>TRANSFER SECURELY</button>
            </div>
            <h4 className="auto">Set up an automatic payment for this account</h4>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default TransferM;
