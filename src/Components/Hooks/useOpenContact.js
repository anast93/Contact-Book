import { useState } from 'react';

export function useOpenContact () {
    const [openContact, setOpenContact] = useState(null);

    return { openContact, setOpenContact }
}