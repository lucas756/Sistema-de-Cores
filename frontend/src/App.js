import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Form, Input } from "@rocketseat/unform";

function App() {

  const [item, setItem] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const api = axios.create({
        baseURL: 'http://localhost:8080',
      });
      
      const response = await api.get('cor');
      setItem(response.data);
    }
    loadPosts();
  }, []);

  async function handleSubmit (data){
    const api = axios.create({
      baseURL: 'http://localhost:8080',
    });
    
    const response = await api.post('cor', data);
    window.location.reload();
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="color" name="name" />
        <button type="submit">enviar</button>
      </Form>
      
      {
         item.map(items => (
           <div className="quadrado" style={{
             background: items.name,
           }}>
            <div className="text">
              <h1>{items.id} </h1><br/>
              <h3> {items.name}</h3>
            </div>
           </div>
         ))
       }
    </div>   
  );
}

export default App;
