import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import inputstyle from "../../css/structure/input.css";

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

  const rows_to_display = 7;

  return (
    <div className="tableGroup">
      <input
        className="inputs-Global"
        type="text"
        placeholder="Busque pelo nome"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th className="titles-Global">Nome</th>
            <th className="titles-Global">Visitas</th>
            <th className="titles-Global">Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers()
            .slice(0, rows_to_display)
            .map((user) => (
              <tr key={user.id}>
                <td className="titles-Global">{user.name}</td>
                <td className="titles-Global">{user._count.visits}</td>
                <td>
                  <button
                    className="button-Global"
                    onClick={() => openModal(user.id)}
                  >
                    Saiba Mais
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Details"
      >
        {selectedUser && (
          <div>
            <h2 className="giantTitle-Global">{selectedUser.name}</h2>
            <p className="titles-Global">Telefone: {selectedUser.phone}</p>
            <p className="titles-Global">Gênero: {selectedUser.gender}</p>
            <p className="titles-Global">Idade: {selectedUser.age}</p>
            <p className="titles-Global">Endereço: {selectedUser.address}</p>
            <p className="titles-Global">
              Cidade e Estado: {selectedUser.cityAndState}
            </p>
            <p className="titles-Global">Religião: {selectedUser.religion}</p>
            <p className="titles-Global">
              Pequeno Grupo: {selectedUser.smallGroup}
            </p>
            <p className="titles-Global">
              Estudo Bíblico: {selectedUser.bibleStudy}
            </p>
            <p className="titles-Global">
              Visitas: {selectedUser._count.visits}
            </p>
            {/* Adicione outras informações conforme necessário */}
            <button className="buttonBack-Global" onClick={closeModal}>
              Fechar
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Relatorios;
