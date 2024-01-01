import React, { useState } from "react";

const PrimeiraLetraMaiuscula = ({ placeholder, ...props }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    // Transforma a primeira letra de cada palavra em maiúscula
    const capitalizedValue = newValue
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());

    setInputValue(capitalizedValue);

    // Se você quiser passar a função de mudança para o componente pai, descomente a linha abaixo
    // props.onChange && props.onChange(capitalizedValue);
  };

  return (
    <input
      {...props}
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default PrimeiraLetraMaiuscula;
