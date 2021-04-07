import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { showSnackbar } from "./redux/action";
import CustomSnackbar from "./containers/CustomSnackbar";

const App = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      showSnackbar({
        message: "minha snackzinha",
        actionText: "printar",
        action: () => {
          console.log("acao executada");
        },
      })
    );
  };

  return (
    <>
      <CustomSnackbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button type="button" onClick={handleClick}>
            Clique aqui para a modal aparecer
          </button>
        </header>
      </div>
    </>
  );
};

export default App;
