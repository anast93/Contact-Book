import { useState } from 'react';

export const useLocalStorage = () => {
    const [contactsData, setContactsData] = useState(() => 
        JSON.parse(localStorage.getItem('Contacts')));
    return { contactsData, setContactsData };
};