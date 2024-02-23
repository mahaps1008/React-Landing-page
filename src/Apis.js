import React, { useEffect, useState } from 'react'
import './Apis.scss'

function Apis() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("https://reqres.in/api/user"); 
            const result = await response.json();
            setUsers(result.data);
          } catch (error) {
            console.log("Error occurred:", error);
          }
        };
    
        fetchUsers();
      }, []);
    
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>year</th>
                <th>color</th>
                <th>pantone_value</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td>{item.color}</td>
                  <td>{item.pantone_value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    


export default Apis