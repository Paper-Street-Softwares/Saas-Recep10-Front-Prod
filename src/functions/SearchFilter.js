import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../css/Painel.module.css";
import inputstyle from "../css/structure/input.css";

const SearchFilter = ({ onUserClick }) => {
  const [visitors, setVisitors] = useState([]);
  const [names, setNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");

  useEffect(() => {
    axios
      .get("https://recep10-back.up.railway.app/api/visitantes")
      .then((response) => {
        setVisitors(response.data);
        setNames(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);

  const filterNames = (event) => {
    const value = event.target.value.toUpperCase();
    setSearchTerm(value);

    const filteredNames = visitors.filter((visitor) =>
      visitor.name.toUpperCase().includes(value)
    );

    setNames(filteredNames);
  };

  const handleUserClick = (userId, userName) => {
    onUserClick(userId, userName);
    setSelectedUserName(userName);
    setSearchTerm(userName); // Atualiza o termo de pesquisa para o nome clicado
  };

  const max_items_to_display = 5;

  return (
    <div>
      <p className="titles-Global">Pesquisar visitante</p>
      <input
        className="inputs-Global"
        type="text"
        value={searchTerm}
        onChange={filterNames}
        placeholder="Digite um nome..."
      />
      {searchTerm && (
        <ul className="uls-Global">
          {names.slice(0, max_items_to_display).map((visitor, index) => (
            <li
              className="lis-Global"
              key={index}
              onClick={() => handleUserClick(visitor.id, visitor.name)}
            >
              {visitor.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchFilter;
