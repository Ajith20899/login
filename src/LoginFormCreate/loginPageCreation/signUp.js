import React from 'react';
import {Dropdown} from 'semantic-ui-react'
const countryOptions = [
    { key: 'af', value: 'covai', flag: 'af', text: 'covai' },
    { key: 'ax', value: 'chennai', flag: 'ax', text: 'chennai' },
    { key: 'al', value: 'trichy', flag: 'al', text: 'trichy' },
    { key: 'dz', value: 'madurai', flag: 'dz', text: 'madurai' },
  ]

export default class SignUp extends React.Component { 

    state = {
        city : '',
        mobileNo : '',
        gender : "",
        emailValue : '',
        DOB : '',
        pinCodeValue : '',
        change : true
    }

    dropDown = (e,a) => {
        e.preventDefault();
        this.setState ({
            city : a.value
        })  
    }

    email = (e) => { 
        this.setState({ 
            emailValue : e.target.value
        },() => console.log(this.state.emailValue) ) 
    } 

    mobile = (e) => { 
        if(e.target.value >=0 && e.target.value <100000000000){ 
            this.setState({ 
                mobileNo : e.target.value
            },() => console.log(this.state.mobileNo) ) 
        } 
    } 
    dateOfBirth = (e) => {
        this.setState({
            DOB : e.target.value
        })
    } 
    pinCode = (e) => {
        this.setState ({
            pinCodeValue : e.target.value
        })
    } 

    genderChange = (e) => {
        if(e.target.checked)
        {
            e.preventDefault();
            this.setState({
                gender : e.target.value
            },()=>{
                console.log(this.state.gender)
            })
        }
    }
    submit = (e) => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let address = this.state.emailValue;
        if (reg.test(address) === false) 
        {
            e.preventDefault();
            alert('Invalid Email Address');
            this.emailRef.focus();
        }

        if(!(this.state.DOB).match(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/)) {
            alert('check DOB');
            e.preventDefault();
        } 

        let pat1=/^[0-9]{1,6}$/;
        if( !pat1.test(this.state.pinCodeValue)) { 
            e.preventDefault();
            alert(this.state.pinCodeValue)
        }
        console.log('city' + this.state.city) 

        this.setState ({
            change : false
        })
    }

    render(){ 
        return ( 
            <React.Fragment> 
                <section className="signupPage"> 
                    {this.state.change === true ? (
                    <form > 
                        <div className="signupPageMainContent"> 
                            <input type="text" 
                                autoComplete="off" 
                                placeholder="Email" 
                                value = {this.state.emailValue}
                                className="emailInputBoxInSignUpComponent" 
                                ref={(input) => {this.emailRef = input}}
                                onChange = {this.email} 
                                required 
                            /> 
                            <input type="text" 
                                autoComplete="off"
                                placeholder="mobile no" 
                                value = {this.state.mobileNo}
                                className="PhoneNoInputBoxInSignUpComponent"
                                ref={(input) => {this.mobileRef = input}}
                                onChange = {this.mobile}
                                maxLength="10"
                                required 
                            /> 
                            <input type="text" 
                                autoComplete="off"  
                                placeholder="DD-MM-YYYY" 
                                maxLength="10"
                                value = {this.state.DOB}
                                className="DateInputBoxInSignUpComponent" 
                                ref={(input) => {this.DOBRef = input}}
                                onChange = {this.dateOfBirth}
                                required 
                            /> 
                            <div className="radio" onChange={this.genderChange}> 
                                <div className="maleInputBoxInSignUpComponent" >                         
                                    <input type="radio" 
                                    value = "male"
                                    htmlFor="label" 
                                    name="gender" 
                                    required
                                    /><span>male</span> 
                                </div> 
                                <div className="femaleInputBoxInSignUpComponent" >                          
                                    <input type="radio" 
                                    htmlFor="label" 
                                    value= "female"
                                    name="gender" 
                                    /><span>female</span> 
                                </div>                        
                                <div className="otherInputBoxInSignUpComponent" >                        
                                    <input type="radio" 
                                    htmlFor="label" 
                                    value= "other"
                                    name="gender" 
                                    /><span>other</span>
                                </div> 
                            </div> 
                            <Dropdown
                                placeholder='Select city'
                                fluid
                                search
                                selection 
                                onChange={(e,a)=>{this.dropDown(e,a)}}
                                ref={(input) => {this.cityRef = input}} 
                                options={countryOptions} 
                                style={{
                                    display : 'grid', 
                                    border: '2px solid gray', 
                                    borderRadius: '10px', 
                                    outline: 'none', 
                                }}
                                required
                            />
                            <input type="text" 
                                autoComplete="off"
                                placeholder="pincode" 
                                maxLength="6" 
                                value = {this.state.pinCodeValue}
                                ref={(input) => {this.pincodeRef = input}}
                                className="pincodeInputBoxInSignUpComponent"
                                onChange = {this.pinCode}
                                required
                            />  
                            <input type="button"
                                value="Submit" 
                                onClick={this.submit}
                                className="loginButonInputBoxInPasswordComponent" 
                            /> 
                        </div> 
                    </form> ) : 
                    (
                    <div>
                                            <form > 
                        <div className="signupPageMainContent"> 
                            <input type="text" 
                                autoComplete="off" 
                                placeholder="Email" 
                                value = {this.state.emailValue}
                                className="emailInputBoxInSignUpComponent" 
                                ref={(input) => {this.emailRef = input}}
                                onChange = {this.email} 
                                required 
                            /> 
                            <input type="text" 
                                autoComplete="off"
                                placeholder="mobile no" 
                                value = {this.state.mobileNo}
                                className="PhoneNoInputBoxInSignUpComponent"
                                ref={(input) => {this.mobileRef = input}}
                                onChange = {this.mobile}
                                maxLength="10"
                                required 
                            /> 
                            <input type="text" 
                                autoComplete="off"  
                                placeholder="DD-MM-YYYY" 
                                maxLength="10"
                                value = {this.state.DOB}
                                className="DateInputBoxInSignUpComponent" 
                                ref={(input) => {this.DOBRef = input}}
                                onChange = {this.dateOfBirth}
                                required 
                            /> 
                            <div className="radio" onChange={this.genderChange}> 
                                <div className="maleInputBoxInSignUpComponent" >                         
                                    <input type="radio" 
                                    value = "male"
                                    htmlFor="label" 
                                    name="gender" 
                                    required
                                    /><span>male</span> 
                                </div> 
                                <div className="femaleInputBoxInSignUpComponent" >                          
                                    <input type="radio" 
                                    htmlFor="label" 
                                    value= "female"
                                    name="gender" 
                                    /><span>female</span> 
                                </div>                        
                                <div className="otherInputBoxInSignUpComponent" >                        
                                    <input type="radio" 
                                    htmlFor="label" 
                                    value= "other"
                                    name="gender" 
                                    /><span>other</span>
                                </div> 
                            </div> 
                            <Dropdown
                                placeholder='Select city'
                                fluid
                                search
                                selection 
                                onChange={(e,a)=>{this.dropDown(e,a)}}
                                ref={(input) => {this.cityRef = input}} 
                                options={countryOptions} 
                                style={{
                                    display : 'grid', 
                                    border: '2px solid gray', 
                                    borderRadius: '10px', 
                                    outline: 'none', 
                                }}
                                required
                            />
                            <input type="text" 
                                autoComplete="off"
                                placeholder="pincode" 
                                maxLength="6" 
                                value = {this.state.pinCodeValue}
                                ref={(input) => {this.pincodeRef = input}}
                                className="pincodeInputBoxInSignUpComponent"
                                onChange = {this.pinCode}
                                required
                            />  
                            <input type="button"
                                value="Submit" 
                                onClick={this.submit}
                                className="loginButonInputBoxInPasswordComponent" 
                            /> 
                        </div> 
                    </form> 
                        <p>{
                            " email : "+ this.state.emailValue 
                        }</p>
                        <p>{
                            "\n mobile NO : "+this.state.mobileNo
                        }</p>
                        <p>{ 
                            "\n DOB : "+this.state.DOB
                        }</p>
                        <p>{
                            "\n gender : "+this.state.gender
                        }</p>
                        <p>{
                            "\n city : "+ this.state.city
                        }</p>
                        <p>{
                            "\n pincode : "+this.state.pinCodeValue
                        }</p>
                    </div> 
                    )}
                </section>
            </React.Fragment>
        );
    }
}