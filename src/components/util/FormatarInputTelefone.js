export const formatarInputTelefone = (telefone) => {
  const cleaned = telefone.replace(/\D/g, "");
  const formatted = cleaned.replace(
    /(\d{2})(\d{1})(\d{4})(\d{4})/,
    "($1) $2.$3-$4"
  );
  return formatted;
};
