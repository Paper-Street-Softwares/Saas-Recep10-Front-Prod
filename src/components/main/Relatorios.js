import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../../css/Painel.module.css";

const Relatorios = ({ onUserClick }) => {
  const [visitors, setVisitors] = useState([]);
  const [names, setNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserDetails, setSelectedUserDetails] = useState({});
  const [isRelDialogOpen, setIsRelDialogOpen] = useState(false);

  const handleClick = (itemId) => {
    axios
      .get(`https://recep10-back.up.railway.app/api/visitantes/${itemId}`)
      .then((response) => {
        setSelectedUserDetails(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  };

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
    const dialog = document.getElementById("detalhes");
    dialog.showModal();

    // Verifica se a função onUserClick foi passada como propriedade antes de chamá-la
    if (typeof onUserClick === "function") {
      onUserClick(userId, userName);
      handleClick(userId); // Atualiza os detalhes do usuário ao clicar
      setSearchTerm(userName); // Atualiza o termo de pesquisa para o nome clicado
    }
  };

  const abrirDialog = () => {
    const dialog = document.getElementById("rel");
    dialog.showModal();
    setIsRelDialogOpen(true);
  };

  const fecharDialog = () => {
    const dialog = document.getElementById("rel");
    dialog.close();
    setIsRelDialogOpen(false);
  };

  return (
    <div>
      <dialog className={style.regaut} id="rel">
        <h1 style={{ pointerEvents: "none" }}>RELATÓRIO</h1>
        <div>
          <button className={style.button} onClick={fecharDialog}>
            FECHAR
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={filterNames}
            placeholder="Digite um nome..."
          />
          {isRelDialogOpen && (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Visitas</th>
                  <th>Detalhes</th>
                </tr>
              </thead>
              <tbody>
                {names.map((visitor, index) => (
                  <tr key={index}>
                    <td>{visitor.name}</td>
                    <td>{visitor._count.visits}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleUserClick(visitor.id, visitor.name);
                        }}
                      >
                        Saiba mais
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </dialog>
      <dialog id="detalhes">
        <table>
          <tbody>
            <tr>
              <td>Name: {selectedUserDetails.name}</td>
            </tr>
            <tr>
              <td>Phone: {selectedUserDetails.phone}</td>
            </tr>
            <tr>
              <td>Gender: {selectedUserDetails.gender}</td>
            </tr>
            <tr>
              <td>Age: {selectedUserDetails.age}</td>
            </tr>
            <tr>
              <td>Address: {selectedUserDetails.address}</td>
            </tr>
            <tr>
              <td>City and State: {selectedUserDetails.cityAndState}</td>
            </tr>
            <tr>
              <td>Religion: {selectedUserDetails.religion}</td>
            </tr>
            <tr>
              <td>Small Group: {selectedUserDetails.smallGroup}</td>
            </tr>
            <tr>
              <td>Bible Study: {selectedUserDetails.bibleStudy}</td>
            </tr>
            <tr>
              <td>Visits: {selectedUserDetails._count?.visits}</td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => document.getElementById("detalhes").close()}
                >
                  Fechar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </dialog>
    </div>
  );
};

export default Relatorios;
