import  "./CreditCardForm.css";
import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import { Card } from "../Card/Card";

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

const handleChange2 = (value: string) => {
console.log(`selected ${value}`);
};

export default function CreditCardorm (): JSX.Element{
    return(
        <div className="cardComponent-form">
            <Card/>
             <div className="creditCardForm-component">
            <div className="form">
            <div className="firstImputs">
                <div className="input-label-container">
                    <p className="label-inputs">Card number</p>
                    <Input placeholder="4517 - 1111 - 1111 - 1111" />
                </div>
                <div className="input-label-container">
                    <p className="label-inputs">Name of owner</p>
                    <Input placeholder="Dylan Sebastian" />
                </div>


                <div className="secondInputs">
                    <div className="month-year-cvv">
                    <div className="month-year">
                        <div className="input-label-container">
                        <p className="label-inputs">Expiration date</p>
                        <div className="selectores">
                        <Select
                        defaultValue="Month"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                            { value: '6', label: '6' },
                            { value: '7', label: '7' },
                            { value: '8', label: '8' },
                            { value: '9', label: '9' },
                            { value: '10', label: '10' },
                            { value: '11', label: '11' },
                            { value: '12', label: '12' },
                        ]}
                        />

                        <Select
                        defaultValue="Year"
                        style={{ width: 120 }}
                        onChange={handleChange2}
                        options={[
                            { value: '2023', label: '2023' },
                            { value: '2024', label: '2024' },
                            { value: '2025', label: '2025' },
                            { value: '2026', label: '2026' },
                            { value: '2027', label: '2027' },
                            { value: '2028', label: '2028' },
                            { value: '2029', label: '2029' },
                            { value: '2030', label: '2030' },
                            { value: '2031', label: '2031' },
                            { value: '2032', label: '2032' },
                            { value: '2033', label: '2033' },
                            { value: '2034', label: '2034' }
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