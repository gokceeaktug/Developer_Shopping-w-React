import styled from 'styled-components';
import './Button.css';

export const ButtonContainer=styled.button`
text-transform:capitalize;
border:0.05rem solid var(--mainDark);
border-radius:0.5rem;
font-size:1.4rem;
background:transparent;
border-color:var(--darkBlue);
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-ease-in-out;
&::hover{
    background:var(--lightBlue);
    color:var(--mainBlue);
}
&::focus
{
    outline:none;
}
`