import React from "react";
import "./Card.css"
import chipImg from "../../Assets/png-transparent-integrated-circuit-smart-card-card-chip-electronics-text-rectangle.png"
import { RiVisaLine } from "react-icons/ri";


function Card(): JSX.Element {
    return (
      <div className="card-component">
     
            <div className="chip-marca">
                    <img className="chip" src={chipImg}></img>
                    <div ><RiVisaLine className="marca"/></div>
            </div>
            <div className="numbers-container">
                <div className="numbers">####</div>
                <div className="numbers">####</div>
                <div className="numbers">####</div>
                <div className="numbers">####</div>
            </div>
            <div className="cardHolder-expiresDate">
            <div className="card-holder-container">
                <p className="data-type-card">CARD HOLDER</p>
                <div>NAME OF CARD</div>
            </div>
            <div className="expires-date-container">
                <p className="data-type-card">EXPIRES</p>
                <div>MM/YY</div>
            </div>
            <div className="back-Card-component">
              <div className="magnetic"></div>
              <div className="whiteCenter-cvv"></div>
              <img>LOGO</img>
          </div>
        </div>

      
      </div>
    );
  }
  
  export {Card};