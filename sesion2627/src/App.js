import Taks, { Provider } from './components/Taks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider>
        <Taks/>
      </Provider>
      </header>
    </div>
  );
}

export default App;
