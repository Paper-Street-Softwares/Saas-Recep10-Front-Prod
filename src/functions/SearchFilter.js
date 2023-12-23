import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchFilter = ({ onUserClick }) => {
  const [visitors, setVisitors] = useState([]);
  const [names, setNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("https://recep10-back.up.railway.app/api/visitantes")
      .then(response => {
        setVisitors(response.data);
        setNames(response.data);
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }, []);

  const filterNames = (event) => {
    const value = event.target.value.toUpperCase();
    setSearchTerm(value);

    const filteredNames = visitors.filter(visitor =>
      visitor.name.toUpperCase().includes(value)
    );

    setNames(filteredNames);
  };

  const handleUserClick = (userId, userName) => {
    onUserClick(userId, userName);
  };

  return (
    <div>
      <h2>Lista de Nomes</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={filterNames}
        placeholder="Digite um nome..."
      />

      {searchTerm && (
        <ul>
          {names.map((visitor, index) => (
            <li key={index} onClick={() => handleUserClick(visitor.id, visitor.name)}>
              {visitor.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchFilter;
