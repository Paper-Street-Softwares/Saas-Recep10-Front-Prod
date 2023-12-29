import React, { useState, useEffect } from "react";
import axios from "axios";
import anime from "animejs";

const SearchFilterUpdate = ({ onUserClick }) => {
  const [visitors, setVisitors] = useState([]);
  const [names, setNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");
  const [showList, setShowList] = useState(false);

  const handleClick = (itemId) => {
    axios
      .get(`https://recep10-back.up.railway.app/api/visitantes/${itemId}`)
      .then((response) => {
        setVisitor(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });

    const ativarEdicao = document.getElementById("edit");
    const delDados = document.getElementById("del");

    ativarEdicao.style.pointerEvents = "auto";
    ativarEdicao.style.cursor = "pointer";

    delDados.style.opacity = "1";
    delDados.style.pointerEvents = "auto";
    delDados.style.cursor = "pointer";

    anime({
      targets: ativarEdicao,
      duration: 200,
      easing: "linear",
      opacity: 1,
    });
  };

  const [visitor, setVisitor] = useState([]);

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
    setShowList(true);
  };

  const handleUserClick = (userId, userName) => {
    // Verifica se a função onUserClick foi passada como propriedade antes de chamá-la
    if (typeof onUserClick === "function") {
      onUserClick(userId, userName);
      setSelectedUserName(userName);
      setSearchTerm(userName); // Atualiza o termo de pesquisa para o nome clicado
      setShowList(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        className="inputs-Global"
        type="text"
        value={searchTerm}
        onChange={filterNames}
        placeholder="Digite um nome..."
      />

      {searchTerm && (
        <div className="float-list">
          <ul className="uls-Global">
            {names.map((visitor, index) => (
              <li
                className="lis-Global"
                key={index}
                onClick={() => handleUserClick(visitor.id, visitor.name)}
              >
                {visitor.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchFilterUpdate;
