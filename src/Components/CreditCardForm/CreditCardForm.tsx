import  "./CreditCardForm.css";
import React, { useState, ChangeEvent, useEffect } from "react";
import  formatter  from 'antd/lib/input';
import { Input, Form  } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import { Card } from "../Card/Card";
import "../Card/Card.css"
import chipImg from "../../Assets/png-transparent-integrated-circuit-smart-card-card-chip-electronics-text-rectangle.png"
import { RiVisaLine } from "react-icons/ri";
import { kMaxLength } from "buffer";


const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

const handleChange2 = (value: string) => {
console.log(`selected ${value}`);
};



export default function CreditCardorm (): JSX.Element{
    const [cardNumber, setCardNumber] = useState<string>("");
    const [nameCard, setnameCard] = useState<string>("");
    const [dateExpiresMonth, setdateExpiresMonth] = useState<number>();
    const [dateExpiresYear, setdateExpiresYear] = useState<number>();
    const [codeCvv, setcodeCvv] = useState<number>();


    
  
  
    

    const handleValueCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, ""); // Filtrar caracteres no numéricos
        const formattedValue = formatCardNumber(numericValue);
        setCardNumber(formattedValue.slice(0,25)); // Limitar a 10 caracteres en el estado
    };
    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const alphabeticValue = inputValue.replace(/[^A-Za-z\s]/g, ""); // Filtrar caracteres no alfabéticos
        setnameCard(alphabeticValue);
      };
    const handleDate = (value: number | undefined) => {
        setdateExpiresMonth(value);
      };
    const handleDate2 = (value: number | undefined) => {
    setdateExpiresYear(value);
    };

    const formatCardNumber = (value: string): string => {
        // Implementa el formateo de los números de la tarjeta según tus necesidades
        // Por ejemplo, puedes dividirlos en grupos de 4 caracteres
        return value.replace(/(\d{4})/g, "$1 - ").trim();
      };
    
 /*    const handleCvv = (event: ChangeEvent<HTMLInputElement>) => {
        setcodeCvv(event.target.value);
    }; */
   
    return(
        <div className="cardComponent-form">
                  <div className="card-component">
        <div>
            <div className="chip-marca">
                    <img className="chip" src={chipImg}></img>
                    <div ><RiVisaLine className="marca"/></div>
            </div>
            <div className="numbers-container">
             {!cardNumber ? <div className="numbers">#### - #### - #### - ####</div> : cardNumber}
                {/* <div className="numbers">####</div>
                <div className="numbers">####</div>
                <div className="numbers">####</div> */}
            </div>
            <div className="cardHolder-expiresDate">
            <div className="card-holder-container">
                <p className="data-type-card">CARD HOLDER</p>
                {!nameCard ? <div className="numbers">NAME OF CARD</div> : nameCard.slice(0, 12).toUpperCase()}
            </div>
            <div className="expires-date-container">
                <p className="data-type-card">EXPIRES</p>
                <div className="date-aux">
                    {!dateExpiresMonth ?<div>MM</div>: dateExpiresMonth}
                    <div>/</div>
                    {!dateExpiresYear ? <div>YY</div> : dateExpiresYear}
                </div>
                
            </div>
            </div>
        </div>
      </div>
             <div className="creditCardForm-component">
            <div className="form">
            <div className="firstImputs">
                <div className="input-label-container">
                    <p className="label-inputs">Card number</p>
                    <Form>
        <Form.Item
          name="cardNumber"
          rules={[
            {
              required: true,
              message: "Please enter a valid card number (digits only)",
              pattern: /^[0-9]*$/,
            },
         
          ]}
        >
          <Input
            maxLength={16}
            value={cardNumber}
            placeholder="1111 - 1111 - 1111 - 1111"
            onChange={handleValueCardNumber}
          />
        </Form.Item>
        </Form>
                </div>
                <div className="input-label-container">
                    <p className="label-inputs">Name of owner</p>
                    <Input 
                    name="nameCard"
                    value={nameCard}
                    placeholder="Dylan Sebastian Marcote" 
                    onChange={(event)=> handleName(event)}/>
                </div>


                <div className="secondInputs">
                    <div className="month-year-cvv">
                    <div className="month-year">
                        <div className="input-label-container">
                        <p className="label-inputs">Expiration date</p>
                        <div className="selectores">
                        <Select
                        placeholder="Month"
                        style={{ width: 120 }}
                        onChange={handleDate}
                        options={[
                            { value: 1, label: 1 },
                            { value: 2, label: 2 },
                            { value: 3, label: 3 },
                            { value: 4, label: 4 },
                            { value: 5, label: 5 },
                            { value: 6, label: 6 },
                            { value: 7, label: 7 },
                            { value: 8, label: 8 },
                            { value: 9, label: 9 },
                            { value: 10, label: 10 },
                            { value: 11, label: 11 },
                            { value: 12, label: 12 }
                        ]}
                        />

                        <Select
                        placeholder="Year"
                        style={{ width: 120 }}
                        onChange={handleDate2}
                        options={[
                            { value: 23, label: 23 },
                            { value: 24, label: 24 },
                            { value: 25, label: 25 },
                            { value: 26, label: 26 },
                            { value: 27, label: 27 },
                            { value: 28, label: 28 },
                            { value: 29, label: 29 },
                            { value: 30, label: 30 },
                            { value: 31, label: 31 },
                            { value: 32, label: 32 },
                            { value: 33, label: 33 },
                            { value: 34, label: 34 }
                        ]}
                        />
                        </div>
                            
                        </div>
                       
                    </div>
                
                    <div className="input-label-container">
                        <p className="label-inputs">CVV</p>
                        <Input placeholder="123" 
                        style={{ width: 79 }}/>
                    </div>
                        

                </div>
                       
                </div>   
                <Button type="primary" className="button">Submit</Button>
            </div>  
            </div>

            

            </div>
        </div>
       
        
    )
}