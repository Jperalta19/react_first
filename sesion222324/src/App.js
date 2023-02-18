import './App.css';
import ContactContainer from './components/containers/ContactContainer';
import ContactFormContainer from './components/containers/ContactFormContainer';
import Filteroptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactContainer></ContactContainer>
        <ContactFormContainer></ContactFormContainer>
        {/* Filter Options contain Filter Container */}
        <Filteroptions></Filteroptions>
      </header>
    </div>
  );
}

export default App;
