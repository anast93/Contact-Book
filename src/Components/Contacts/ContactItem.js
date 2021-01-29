import React from 'react';
import styled from 'styled-components';
import userImg from '../../Images/user.png';

const ContactItemStyled = styled.li`
    position: relative;
    margin: 2px;
    padding: 5px 10px;
    width: 320px;
    height: 112px;
    border: 1px solid rgba(0,0,0,.2);
    transition: linear .3s;

    &:hover {
        transform: scale(1.02);
        box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.3);
    }
`;

const ContactInfo = styled.ul`
    list-style-type: none;
`;

const ContactImg = styled.li`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
    height: 100px;
    background: url(${userImg});
    // background: #419fa7;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,.3);
`;

const ContactDescription = styled.ul`
    margin-left: 120px;
    padding: 10px 0;
    width: 154px;
    height: 100px;
    list-style-type: none;
    overflow: auto;
`;

const ContactText = styled.li`
    border-bottom: 1px solid rgba(0,0,0,.2);
    word-wrap: break-word;
`;

export const ContactItem = ({contact, setOpenContact}) => {
    return (
        <ContactItemStyled 
            className='contact-item' 
            onClick={() => setOpenContact(contact)}>
            <ContactInfo>
                <ContactImg></ContactImg>
                <ContactDescription>
                    {Object.keys(contact).map(key => {
                        if(key !== 'key') {
                            return (
                                <ContactText key={`${key}`}>{contact[key]}</ContactText>
                            ); 
                        }
                    })}
                </ContactDescription>
            </ContactInfo>
    </ContactItemStyled>
    );
};