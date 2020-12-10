import { Link } from 'react-router-dom';
import './App.css';
import NotefulApp from './NotefulApp/NotefulApp'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <header>
        <h1><Link to={`/`}>Noteful! By Ian</Link></h1>
      </header>
      <main>
        <ErrorBoundary>
          <NotefulApp />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;