
import './App.css'
import Header from './components/Header';
import News from './components/News';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <Header />
      <Pagination />
      <News />
    </div>
  )
}

export default App
