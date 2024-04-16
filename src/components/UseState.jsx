const UseState = () => {
  const [numero, setNumero] = useState(0);
  const [mode, setMode] = useState(false);
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);

  return (
    <>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: mode ? "#000" : "#FFF",
        color: mode ? "#FFF" : "#000",
        transitionDuration: "200ms",
      }}
    >
      <button
        style={{ solid: "Black", borderRadius: "15px", color: "Blue" }}
        onClick={() => {
          setNumero(numero + 1);
          setMode(!mode);
        }}
      >
        Mude a cor aqui
      </button>
      <h2>A cor agora é: {mode}</h2>
      <input type="text" onChange={(e) => setNome(e.target.value)} />
      <button onClick={() => setNomes([nomes, nome])}>Guardar</button>
      <h3>Nomes: {nomes.toString()}</h3>
    </div>
  </>
  );
};

export default UseState;
