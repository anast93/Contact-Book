import React, { useEffect } from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { Header } from './Components/Header/Header';
import { ContactsList } from './Components/Contacts/ContactsList';
import { useFetch } from './Components/Hooks/useFetch';
import { useLocalStorage } from './Components/Hooks/useLocalStorage';
import { useOpenContact } from './Components/Hooks/useOpenContact';
import { ModalItem } from './Components/Modal/ModalItem';
import { Context } from './Components/utils/context';
import { sortByName } from './Components/utils/sortByName';


function App() {

	// ContactsData initialization
	const res = useFetch();
	const counterReloads = +localStorage.getItem('Flag');
	let { contactsData, setContactsData } = useLocalStorage();
	const { openContact, setOpenContact } = useOpenContact();

	useEffect(() => {
		if(counterReloads < 3) {
			setContactsData(JSON.parse(localStorage.getItem('Contacts')))
		} 
	}, [counterReloads])

	if(contactsData) {
		sortByName(contactsData);
	}

    // Storing the contactsData to LocalStorage
	useEffect(() => {
		if(res.response) {
			return localStorage.setItem('Contacts', JSON.stringify(contactsData));
		} 
	}, [contactsData]);

	return (
		<Context.Provider value={ { contactsData, setContactsData, openContact, setOpenContact } }>
		<GlobalStyle />
		<Header />
		{res.response ? <ContactsList /> :
		res.error ? <div>Sorry, we will fix it soon</div> :
		<div>Loading...</div>}
		{openContact && <ModalItem />}
		</Context.Provider>
	);
}

export default App;


