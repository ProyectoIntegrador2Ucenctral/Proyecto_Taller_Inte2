//import {useRef, useState} from 'react';
import '../styles/styleSignup.css'
import {Outlet, useNavigate} from "react-router-dom";
//import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import Cookies from 'universal-cookie';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { TraeQRP } from '../ConectionSQL/conexion';
import MenuOpci from '../Componentes/MenuOp';
//import users from '../pages/users.json'
//


function CreaQRP(){
    let cock = new Cookies();
    const navigate = useNavigate();
    const user = cock.get("Datos");
    return(
        <div className='bodyQR'>
            <div className="container">
                <div className="wrapper">
                    <div className="login">
                        <div className="content-heading">
                            <div className="y-style">
                                <div className="welcome">
                                    <div className="welcome">
                                        <h2 className="Titulo">
                                            Crear codigo<br/> 
                                            QR
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contentQR-form">
                            <div className="y-style">
                                <div className='QR'>
                                    <TraeQRP rut={user.rut}/>
                                    {/*<QRCode className='QRcode' value={JSON.stringify(cock.get('qrbici'))} size={230} bgColor="#002aff" fgColor="#fff" level="H" />*/}
                                </div>
                                <button 
                                    onClick={
                                        ev=>{
                                            /*Boton para volver*/
                                            ev.preventDefault();
                                            cock.remove('qrbici');
                                            navigate('/UserProf');//eso redirige a la ruta especificada
                                        }
                                    }
                                    onMouseOver={(e) => e.target.title = 'Volver'} 
                                    id='BtnLogIn' className="GoBack QR centrado" type="sumbit">
                                    <IoMdArrowRoundBack size={60}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuOpci/>
            </div>
            <Outlet/>
        </div>
    );
}

export default CreaQRP;