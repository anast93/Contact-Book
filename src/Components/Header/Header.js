import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../utils/context';
import { generateKey } from '../utils/generateKey';

const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    width: 100%;
    background: rgba(255, 255, 255);
    border-bottom: 1px solid rgba(0,0,0,.2);
    z-index: 1;
`;

const HeaderInput = styled.input`
    padding: 5px 10px;
    width: 100%; 
    height: 29px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 2px;
    outline: none;
    background: rgb(216, 216, 192);
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,.1);
    cursor: pointer;
`;

const HeaderForm = styled.form`
    margin-right: 10px;
    width: 100%; 
`;

const AddContactButton = styled.button`
    width: 70px;
    height: 29px;
    font-size: 10px;
    cursor: pointer;
`;

const SearchContact = styled.button`
    margin-right: 10px;
    width: 70px;
    height: 29px;
    font-size: 10px;
    cursor: pointer;
`;

export const Header = () => {

    const { contactsData, setOpenContact } = useContext(Context);
    
    const searchContact = event => {
        event.preventDefault();
        let inputValue = document.querySelector('.header__search-form').value.trim();
        
        if(!inputValue) {
            return;
        }

        inputValue = inputValue.toLowerCase();

        const foundContact = contactsData.find(contact => {
            const foundKey = Object.keys(contact).find(key => contact[key].toLowerCase() == inputValue);
            if(foundKey) {
                return true;
            } else return false;
        });

        if(foundContact) {
            setOpenContact(foundContact);
        } else {
            alert('Contact is not found!')
        }
        document.querySelector('.header__search').reset();
    }

    const addContact = () => {
        const newContact = {
            name: '',
            phone: '',
            email: '',
            company: '',
            key: generateKey(),
        }
        setOpenContact(newContact);
    }

    return (
        <HeaderStyled>
            <HeaderForm onSubmit={searchContact} className="header__search">
                <HeaderInput type="text" placeholder="Search in contacts" className="header__search-form" />
		    </HeaderForm>
            <SearchContact onClick={searchContact}>SEARCH</SearchContact>
            <AddContactButton onClick={addContact}>Add contact</AddContactButton>
        </HeaderStyled>
    );
}
