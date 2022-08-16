import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Search, Results, Details, Footer } from './components';

// https://api.rawg.io/api/games?key=0d853fc444024e038f0d01d8bbb2e0a7&page=1&page_size=10&search=%27san%20andreas%27

function App() {
  return (
    <div className='App'>
      <Search />
      <Results />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
