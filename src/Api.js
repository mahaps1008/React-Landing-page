import React, { useEffect, useState } from 'react';

function Api() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://reqres.in/api/users");
                const result = await response.json();
                setUsers(result.data);
            } catch (error) {
                console.log("error occurred:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div> 
            <ul>
                {users.map((item) => (
                    <li key={item.id}>
                        <p>Email: {item.email}</p>
                        <p>First Name: {item.first_name}</p>
                        <p>Last Name: {item.last_name}</p>
                        <img src={item.avatar} alt={`Avatar of ${item.first_name} ${item.last_name}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Api;
