import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const array = [ 'caminhar', 'correr', 'nadar', 'viajar', 'estudar']
const olElement = <ol>{array.map((toDo) => Task(toDo))}</ol>

const App = () => {
  return (
    olElement
  );
}

export default App;
