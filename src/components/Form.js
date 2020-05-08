import React from 'react';
import './style.css';
import Button from './Button'


const ContactForm = ({ theme, onSubmit, onChange, placeholder1, placeholder2, placeholder3, btnValue1, btnValue2}) => (
    <div className='container'>
    
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
            <form id='contact-form' onSubmit={onSubmit}>
    <div className={`form-elements ${theme}`} id={`${theme}-form-el-wrapper`}>
    <label className={`${theme}-label`}>{theme.charAt(0).toUpperCase() + theme.slice(1)} Contact Form</label>
        <input  className="text-action"  type='text' placeholder={placeholder1}  name='fullName' onChange = {onChange} />
        <input  className="text-action"  type='email' placeholder={placeholder2} name='email' onChange = {onChange} />
        <input  className="text-action"  type='tel' placeholder={placeholder3}  name='phone' onChange = {onChange} />
        <textarea  className="text-action" placeholder='Type a message here' name='content' onChange = {onChange} />
        <div id='btnWrapper'>
        <Button className = {`${theme}`} value={btnValue1} size='lg'>Submit</Button>
        <Button className = {`${theme}`} value={btnValue2} size='lg'>Clear</Button>  
        </div>
   </div>
    </form>
            </div>
            <div className='col-md-2'></div>
        </div>  

    </div>
);

export default ContactForm