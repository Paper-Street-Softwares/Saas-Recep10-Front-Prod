import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import inputstyle from "../../css/structure/input.css";
import style from "../../css/main/relatorios.css";

Modal.setAppElement("#root"); // Define o elemento raiz para acessibilidade

const Relatorios = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://recep10-back.up.railway.app/api/visitantes"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filterUsers = () => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const openModal = async (userId) => {
    try {
      const response = await axios.get(
        `https://recep10-back.up.railway.app/api/visitantes/${userId}`
      );
      setSelectedUser(response.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalIsOpen(false);
  };

  const rows_to_display = 5;

  return (
    <div className="tableGroup">
      <p className="titles-Global">Relatórios</p>
      <p className="text-Home">
        Passo 1. Caso queira saber detalhes de um visitante em específico,
        digite o nome dele no campo abaixo e após localizar, toque em seu nome.
      </p>
      <div className="searchReport">
        <input
          className="inputs-Global"
          type="text"
          placeholder="Busque pelo nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="divSeparate"></div>

      <table className="tableReport-Report">
        <thead>
          <tr className="trReport">
            <th className="titles-Global" id="titulo">
              Nome
            </th>
            <th className="titles-Global" id="titulo">
              Visitas
            </th>
          </tr>
        </thead>
        <tbody>
          {filterUsers()
            .slice(0, rows_to_display)
            .map((user, index) => (
              <tr
                className="trReport"
                id={index % 2 === 0 ? "trWhite" : "trGray"}
                key={user.id}
              >
                <div className="tdVisitas-Relatorios">
                  <td onClick={() => openModal(user.id)} className="tds-Global">
                    {user.name}
                  </td>
                </div>
                <div className="tdVisitas-Relatorios">
                  <td onClick={() => openModal(user.id)} className="tds-Global">
                    {user._count.visits}
                  </td>
                </div>
                {/* <td>
                  <button
                    className="button-Global"
                    onClick={() => openModal(user.id)}
                  >
                    Mais Info
                  </button>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>

      <div className="modalReport-Global">
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="User Details"
        >
          {selectedUser && (
            <div>
              <h2 className="giantTitleModal-Global">{selectedUser.name}</h2>
              <p className="titlesModal-Global">
                Telefone:{" "}
                <span className="spanModal-Options">{selectedUser.phone}</span>
              </p>
              <p className="titlesModal-Global">
                Gênero:{" "}
                <span className="spanModal-Options">{selectedUser.gender}</span>
              </p>
              <p className="titlesModal-Global">
                Idade:{" "}
                <span className="spanModal-Options">{selectedUser.age}</span>
              </p>
              <p className="titlesModal-Global">
                Endereço:{" "}
                <span className="spanModal-Options">
                  {selectedUser.address}
                </span>
              </p>
              <p className="titlesModal-Global">
                Cidade e Estado:{" "}
                <span className="spanModal-Options">
                  {selectedUser.cityAndState}
                </span>
              </p>
              <p className="titlesModal-Global">
                Religião:{" "}
                <span className="spanModal-Options">
                  {selectedUser.religion}
                </span>
              </p>

              <p className="titlesModal-Global">
                Pequeno Grupo:{" "}
                <span className="spanModal-Options">
                  {selectedUser.smallGroup}
                </span>
              </p>
              <p className="titlesModal-Global">
                Estudo Bíblico:{" "}
                <span className="spanModal-Options">
                  {selectedUser.bibleStudy}
                </span>
              </p>
              <p className="titlesModal-Global">
                Visitas:{" "}
                <span className="spanModal-Options">
                  {selectedUser._count.visits}
                </span>
              </p>
              {/* Adicione outras informações conforme necessário */}
              <button className="buttonBack-Global" onClick={closeModal}>
                Fechar
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Relatorios;
