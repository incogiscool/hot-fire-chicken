import React from 'react';
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="nav--container">
            <div className="navbar--container">
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/profile'>
                            <a>Profile</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/order'>
                            <a style={{color: "#006C84"}}>Order</a>
                        </Link>
                    </li>
                </ul>
                <Link href='/'>
                    <img src='https://drive.google.com/uc?export=view&id=1liU3J2P-LJ5a--R8oJMETruhA5v1mjJ5' 
                    width='70px' height='70px' style={{margin: "0px 18px", cursor:'pointer' }}
                    alt='nav-logoimg' 
                    />
                </Link>
            </div>
            
        </nav>
    );
};

export default Navbar