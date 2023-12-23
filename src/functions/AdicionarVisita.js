import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../css/Painel.module.css';
import SearchFilter from './SearchFilter';

const AdicionarVisita = ({ fecharDialog3, abrirDialog3 }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [visitDate, setVisitDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get("https://recep10-back.up.railway.app/api/visitantes")
      .then(response => {
        // Apenas para exemplo, não é necessário carregar visitantes aqui se o SearchFilter já os carrega
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }, []);

  const handleUserClick = (userId, userName) => {
    console.log('ID do usuário clicado:', userId);
    setSelectedUser({ id: userId, name: userName });
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setVisitDate(date);
  };

  const handleAddVisit = () => {
    if (selectedUser && visitDate) {
      const visitData = {
        visitDate,
        visitanteId: selectedUser.id,
      };
  
      axios.post("https://recep10-back.up.railway.app/api/visitas", visitData)
        .then(response => {
          setMessage('Visita adicionada com sucesso!');
        })
        .catch(error => {
          console.error('Erro na requisição POST:', error);
  
          if (error.response) {
            // O servidor retornou uma resposta com um status diferente de 2xx
            console.error('Resposta do servidor:', error.response.data);
            console.error('Status do erro:', error.response.status);
            console.error('Cabeçalhos do erro:', error.response.headers);
          } else if (error.request) {
            // A requisição foi feita, mas não houve resposta do servidor
            console.error('Sem resposta do servidor:', error.request);
          } else {
            // Algo aconteceu na configuração da requisição que gerou o erro
            console.error('Erro de configuração da requisição:', error.message);
          }
  
          setMessage('Erro ao adicionar visita. Consulte o console para mais informações.');
        });
    } else {
      const errorMessage = selectedUser
        ? 'Selecione uma data para adicionar uma visita.'
        : 'Selecione um usuário e uma data para adicionar uma visita.';
  
      setMessage(`O id do usuário é: ${selectedUser?.id || 'N/A'}. ${errorMessage}`);
    }
  };
  

  return (
    <dialog className={style.register2} id="dialog3">
      <form className={style.formulario2}>
        <h1>Adicionar Visita</h1>
        <input id="datavisita" type="date" onChange={handleDateChange}></input>
        <SearchFilter onUserClick={handleUserClick} />
      </form>
      <div className={style.btns}>
        <button onClick={fecharDialog3} className={style.btnback}>VOLTAR</button>
        <button onClick={handleAddVisit} className={style.btnregister}>ADICIONAR</button>
      </div>
      {message && <p>{message}</p>}
    </dialog>
  );
};

export default AdicionarVisita;
