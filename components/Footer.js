import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='footer-all'>
            <center>
            <hr />
                <Link href="/contact">
                    <footer style={{cursor:"pointer", color:"#006C84"}}>
                        Contact Us
                    </footer>
                </Link>
                <footer className='footer-all'>
                    Copyright 2022 Hot Fire Chicken ©
                </footer>
            </center>
        </div>
    )
}

export default Footer;