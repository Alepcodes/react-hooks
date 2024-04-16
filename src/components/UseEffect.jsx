import { useEffect } from "react";
import { useState } from "react";


const UseEffect = () => {
    const [valor, setValor] = useState(0)
    useEffect(() => {
        console.log("chamado todas as vezes");
    })
    useEffect(() => {
        console.log("chamado apenas uma vez");
    }, [])
    useEffect(() => {
        console.log("chamado toda vez que a dependência sofrer alterações");
    }, [valor])
  return (
    <>
      <button onClick={() => setValor(valor +1)}>+1</button>
    </>
  );
}

export default UseEffect;