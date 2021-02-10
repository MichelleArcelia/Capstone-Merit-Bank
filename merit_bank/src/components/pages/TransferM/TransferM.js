import React from 'react';
import '../Checking/CheckingDetails.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../TransferM/TransferM.css';


import { FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText, Button, Input } from 'reactstrap';


function TransferM() {
    const Example = (props) => {
    }


    return (
        <>
        <div className='HeroContainerDash'>
            <video className='VideoBg' loop autoPlay>
                <source src='videos/video.mp4' type="video/mp4" />
            </video>

            <div className='HeroContent'>

                <h1 className='HeroH1'>
                    TRANSFER MONEY
            </h1>

            </div>
        </div>
        


        < Sidebar />









    <div className='LeftSidePayment'>
      
     
      
     


      <FormGroup>
        <Label for="exampleSelect">TO </Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Checking</option>
          <option>Savings</option>
          <option>CD</option>
          <option>IRA</option>
        </Input>
      </FormGroup>


      <FormGroup>
        <Label for="exampleSelect">FROM</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Savings</option>
          <option>Checking</option>
          <option>CD</option>
          <option>IRA</option>
        </Input>
      </FormGroup>


      <p>Frequency</p>

      <FormGroup check>
        <Label check>
          <Input type="radio" /> Once
        </Label>
      </FormGroup>


      <FormGroup>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>




      <FormGroup check>
        <Label check>
          <Input type="radio" /> AutoPay
        </Label>
      </FormGroup>




      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" min={0} max={250000} type="number" step="1" />
        
      </InputGroup>
      
      <p>Payment amount must be $0.01 or more</p>



      <Button outline color="success">Transfer</Button>{' '}


















      
    </div>







    </>
    )
}

export default TransferM;
