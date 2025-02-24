import React, { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
export default function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        setData(result)
      })
    }).catch(err => {
      alert("In catch block")
    })
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th> Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) =>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
      


    </div>
  )
}