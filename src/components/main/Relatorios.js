import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define o elemento raiz para acessibilidade

const Relatorios = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://recep10-back.up.railway.app/api/visitantes');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const filterUsers = () => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const openModal = async (userId) => {
    try {
      const response = await axios.get(`https://recep10-back.up.railway.app/api/visitantes/${userId}`);
      setSelectedUser(response.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Visitas</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers().map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user._count.visits}</td>
              <td>
                <button onClick={() => openModal(user.id)}>Saiba Mais</button>
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
            <h2>{selectedUser.name}</h2>
            <p>Telefone: {selectedUser.phone}</p>
            <p>Gênero: {selectedUser.gender}</p>
            <p>Idade: {selectedUser.age}</p>
            <p>Endereço: {selectedUser.address}</p>
            <p>Cidade e Estado: {selectedUser.cityAndState}</p>
            <p>Religião: {selectedUser.religion}</p>
            <p>Pequeno Grupo: {selectedUser.smallGroup}</p>
            <p>Estudo Bíblico: {selectedUser.bibleStudy}</p>
            <p>Visitas: {selectedUser._count.visits}</p>
            {/* Adicione outras informações conforme necessário */}
            <button onClick={closeModal}>Fechar</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Relatorios;

