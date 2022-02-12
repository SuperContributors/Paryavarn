import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import{NavLink} from 'react-router-dom';

import Sawo from 'sawo'

const LoginPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        var config = {
            containerID: 'sawo-container',
            identifierType: 'phone_number_sms',
            apiKey: '2aaf1f4e-9857-4d89-94e0-13ffc5f4cefd',
            onSuccess: payload => {
                alert("LogIn Successful")
                navigate('/');
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div id="sawo-container" style={{height:"300px", width:"400px", display:"flex", justifyContent:"center", margin:"10% auto", marginBottom:"0"}}></div>
            <NavLink to="/logein"><p style={{textAlign:"center"}}>LogIn with mail</p></NavLink>       
        </div>
    )
}

export default LoginPage