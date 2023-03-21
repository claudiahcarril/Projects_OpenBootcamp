import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx (tipo clase)*/}
        {/* <Greeting name="Claudia"/> */}

        {/*Componente tipo función*/}
        {/* <GreetingF name="Claudia"/> */}

        {/* Componente de listado de Tareas */}
        <TaskListComponent />

      </header>
    </div>
  );
}

export default App;
