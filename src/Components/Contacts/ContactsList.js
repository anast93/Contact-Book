import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContactItem } from './ContactItem';
import { Context } from '../utils/context';

const ContactSection = styled.div`
    padding: 70px 10px 0;
    cursor: pointer;
`;

const ContactWrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style-type: none;

    &:empty:after {
        content: 'Contact book is empty';
        margin: 15px 0 0 0;
    }
`;


export const ContactsList = () => {
    let { contactsData, setOpenContact } = useContext(Context);

    return (
        <ContactSection>
            <ContactWrap>
                {Array.isArray(contactsData) && (contactsData.length > 0) && contactsData.map(contact => (
                    <ContactItem contact={contact} 
                                setOpenContact={setOpenContact}
                                key={contact.key}/>
                ))}
            </ContactWrap>
        </ContactSection>
    );
}

