import Header from "./Header";
import Footer from "./Footer";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";


function Logout(){
    const url = 'https://foodorderingbackend.adaptable.app';
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("/logout",{
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res)=>{
            navigate("/signin",{replace: true});
            if(res.status != 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch ((err)=>{
            console.log(err);
        })
    });

  

    return (
        <>
        <Header />

        <h1>Log Out</h1>

        <Footer />

        </>
    );
}

export default Logout;