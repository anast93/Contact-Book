import React, { useContext } from 'react';
import styled from 'styled-components';
import { upperCaseFirst } from '../utils/upperCaseFirst';
import { Context } from '../utils/context';

const ContactActive = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	min-width: 320px;
	width: 100%;
	height: 100vh;  
	background: rgba(131, 123, 123, 0.9);
	color: rgba(255,255,255);
	overflow: auto;
	z-index: 2;
`;

const ContactActiveWrap = styled.div`
	padding: 5px;
	max-width: 300px;
	width: 90%;
	background: rgba(131, 123, 123, 1);
`;

const ContactActiveImg = styled.div`
	display: block;
	margin: 0 auto 10px auto;
	width: 100%;
	max-width: 300px;
	height: 200px;
	background: rgba(87, 214, 225, 1);
	//background-image: ${({ photo }) => `url(${ photo })`};
	cursor: pointer;
`;

const ContactActiveInfo = styled.form`
	margin: 0 auto;
	max-width: 300px;
	width: 100%;
`;

const ContactActiveInput = styled.input`
	width: 100%;
	margin-bottom: 10px;
	padding-left: 5px;
	cursor: pointer;
`;

const ContactActiveButtonsDiv = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 0 10px;
`;

const ContactActiveButton = styled.button`
	margin: 5px;
	width: 100px;
	height: 30px;
	font-size: 10px;
	cursor: pointer;
`;

export const ModalItem = () => {
	let { contactsData, setContactsData, openContact, setOpenContact } = useContext(Context);

	const closeModal = event => {
		const target = event.target;
		if(target.closest('.contact_active') && !target.closest('.contact_active-wrap')) {
			setOpenContact(null);
		}
	};

	const deleteContact = openContact => {
		const newContactsData = contactsData.filter(contact => contact.key !== openContact.key);
		setContactsData(newContactsData);
		setOpenContact(null);
	}

	const saveChanges = (event, openContact) => {
		const input = event.target.closest('.contact_active-wrap').querySelectorAll('input');
		const newName = input[0].value,
			newPhone = input[1].value,
			newEmail = input[2].value,
			newCompany = input[3].value;

		let newContactsData = [...contactsData];

		const editedContact = contactsData.find(contact => contact.key === openContact.key);

		if(editedContact) {
			newContactsData.map(contact => {
				if(contact.key === editedContact.key) {
					contact.name = newName;
					contact.phone = newPhone;
					contact.email = newEmail;
					contact.company = newCompany;
				}
				return contact;
			})
		} else {
			const newContact = {
				name: newName,
				phone: newPhone,
				email: newEmail,
				company: newCompany,
				key: openContact.key,
			} 
			newContactsData = [...contactsData, newContact]
		}

		setContactsData(newContactsData);
		setOpenContact(null);
	}

    return (
      <ContactActive className="contact_active" onClick={closeModal}>
        <ContactActiveWrap className="contact_active-wrap">
			<div>
				<ContactActiveImg />
				<ContactActiveInfo>
				{Object.keys(openContact).map(key => {
					if(key !== 'key') {
						return (
							<div key={`${key}`}>
								<p>{`${upperCaseFirst(key)}`}</p>
								<ContactActiveInput defaultValue={openContact[key]} />
							</div>
						)
					}
				})}
				</ContactActiveInfo>
			</div>
			<ContactActiveButtonsDiv>
				<ContactActiveButton onClick={(event) => saveChanges(event, openContact)}>SAVE CHANGES</ContactActiveButton>
				<ContactActiveButton onClick={() => deleteContact(openContact)}>DELETE CONTACT</ContactActiveButton>
			</ContactActiveButtonsDiv>
        </ContactActiveWrap>        
      </ContactActive>  
    );
}
