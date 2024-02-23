import React, { useEffect, useState } from 'react'


function Fetch() {
    const [users,setUsers]=useState ([]);
    useEffect (()=>{
        const fetchUsers= async ()=> {

            try{
                const response=await fetch("https://reqres.in/api/register");
                const result=await response.json();
                setUsers (result.data);
            }catch (error){
                console.log("error occured:",error);
        }
    };
    fetchUsers();
},[]);
        
        
        
    
  return (
    <div>
         <ul>
                {users.map((item) => (
                    <li key={item.id}>
                        <p>id: {item.id}</p>
                        <p>name: {item.name}</p>
                        <p>year: {item.year}</p>
                        <p>color: {item.color}</p>
                        <p>pantone_value: {item.pantone_value}</p>
                        
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Fetch