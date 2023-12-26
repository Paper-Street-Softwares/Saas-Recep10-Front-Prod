import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../css/Painel.module.css';
import SearchFilter from './SearchFilter';
import { abrirDialog4, fecharDialog4} from '../functions/DialogController4'


const AdicionarVisita = ({ fecharDialog3, abrirDialog3 }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [visitDate, setVisitDate] = useState('');

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

  const handleAddVisit = async () => {
    try {
      if (!selectedUser || !visitDate) {
        window.alert("Selecione uma Data e um Visitante!");
        return;
      }

      // Carregar as visitas antes de verificar se o usuário já possui uma visita na data especificada
      const response = await axios.get("https://recep10-back.up.railway.app/api/visitas");
      const visits = response.data;

      // Verificar se o usuário já possui uma visita na data especificada
      const hasVisitOnDate = visits.some(visitor => {
        return (
          visitor.visitanteId === selectedUser.id &&
          visitor.visitDate === visitDate
        );
      });

      if (hasVisitOnDate) {
        window.alert("Já existe uma visita neste dia, selecione outra data.");
        return;
      }

      // Continuar com a lógica de adicionar visita se o usuário não tiver visita na data
      const visitData = {
        visitDate,
        visitanteId: selectedUser.id,
      };

      await axios.post("https://recep10-back.up.railway.app/api/visitas", visitData);
      window.alert('Visita adicionada com sucesso!');
    } catch (error) {
      console.error('Erro ao realizar operações:', error);
      window.alert("Ja existe uma data cadastrada neste dia para este visitante!");
    }
  };

  return (
    <dialog className={style.register2} id="dialog3">
      <form className={style.formulario2}>
        <h1>Adicionar Visita</h1>
        <input type="date" onChange={handleDateChange}></input>
        <SearchFilter onUserClick={handleUserClick} />
      </form>
      <div className={style.btns}>
        <button onClick={fecharDialog4} className={style.btnback}>VOLTAR</button>
        <button onClick={handleAddVisit} className={style.btnregister}>ADICIONAR</button>
      </div>
    </dialog>
  );
};

export default AdicionarVisita;
