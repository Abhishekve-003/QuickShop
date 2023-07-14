import React from 'react';
import "./Contact.css";
import { Button } from "@mui/material";
import MetaData from '../MetaData';

const Contact = () => {
    return(
        <div className='contactPage'>
            <MetaData title="Contact Page"/>
            <a className='mailBtn' href="mailto:q5500407@gmail.com">
                <Button>Contact: q5500407@gmail.com</Button>
            </a>
        </div>
    );
}

export default Contact;