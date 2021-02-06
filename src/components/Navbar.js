import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.jpg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import './Navbar.css';
export default class Navbar extends Component
{
    render() 
    {
        return (
            
                 <NavWrapper className="navbar navbar-expand-sm bg-warning navbar-dark px-sm-5" >
             {/*
             https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk 
 */}
       <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" style={{width:"1.5em"}}></img>
        </Link> 
        <ul className="navbar-nav align-items-center">
           <li className="nav-item ml-5">
               <Link to="/" className="nav-link" style={{color:"black"}}>products</Link></li>
         
        </ul>
        <Link to="/cart" className="ml-auto">
            <ButtonContainer className="buttonContainer"> My Cart
            <span className="mr-2">
                <i  className="fa fa-cart-plus"></i>
            </span>
            
            </ButtonContainer>
        </Link>
        </NavWrapper>
       
    )
}
}


const NavWrapper= styled.nav`
.nav-:link{
    font-size:1.3rem;
    text-transform:capitalize  ;

}

`