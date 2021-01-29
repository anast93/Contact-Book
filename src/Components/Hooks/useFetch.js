import { useEffect, useState } from 'react';
import { generateKey } from '../utils/generateKey';

export const useFetch = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const json = await fetch('http://demo.sibers.com/users');
                const init = await json.json();
                const res = [...init].map(elem => ({
                    name: elem.name,
                    phone: elem.phone,
                    email: elem.email,
                    company: elem.company.name,
                    key: generateKey(),
                }));

                let counterReloads = +localStorage.getItem('Flag') || 1; 

                if(counterReloads < 2) {
                    localStorage.setItem('Contacts', JSON.stringify(res));
                }
                
                localStorage.setItem('Flag', JSON.stringify(counterReloads + 1));
                setResponse(res);
            } catch(err) {
                console.error(err);
                setError(err);
            }
        };
        fetchData();
    }, []);

    return { response, error };
};