import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [signed, setSigned] = useState(false);
    const [name, setName] = useState('');

    return (
        <UserContext.Provider
            value={{
                signed,
                setSigned,
                name,
                setName
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = UserContext(UserContext);

    const {signed, setSigned, name, setName} = context;
    return { signed, setSigned, name, setName };
}