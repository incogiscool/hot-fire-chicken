import React, { useState } from 'react';
import Adminorders from '../../components/Adminorders';
import Loginform from '../../components/Loginform';
import Navbar from '../../components/Navbar';

const Profilepage = () => {

    const adminUser = {
        name: "Admin",
        email: 'admin@gmail.com',
        password: 'admin123'
    };

    const [user, setUser] = useState({name: '', email: ''});
    const [error, setError] = useState('');

    const Login = details => {

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("logged in")
            setUser(
                {
                    name: adminUser.name,
                    email: adminUser.email
                }
            )
        } else {
            setError('Details are Incorrect')
            console.log('details incorrect')
        }

    }

    const Logout = () => {
        console.log('Logout')
        
        setUser(
            {
                name: '',
                email: ''
            }
        )

    }

    //ONLY ALLOW ADMIN LOGIN

    return (
        <div className='profilepage--container'>
            <Navbar />
            <div className='profile-form'>
                {(user.email != '') ? (
                    <div className='admin-user-container'>
                        <h2>Welcome back, {user.name}</h2>
                        <Adminorders />
                        <button className='admin-user-logout' onClick={Logout}>Logout</button>
                    </div>
                ) : (
                    <Loginform Login={Login} error={error} />
                )}
            </div>
        </div>
    )
}

export default Profilepage;