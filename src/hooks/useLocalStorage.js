
import { useState, useEffect } from "react";

function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const itemSalvo = localStorage.getItem(chave);

      return itemSalvo
        ? JSON.parse(itemSalvo)
        : valorInicial;
    } catch (erro) {
      console.error("Erro ao carregar dados:", erro);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (erro) {
      console.error("Erro ao salvar dados:", erro);
    }
  }, [chave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;
