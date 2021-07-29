import './App.css';
import bosses from './data/bosses.json'
import lists from './data/lists.json'
import List from './List';

function App() {
  return (
    <div className="App">
      {
        lists.map((list) => (
          <List bosses={bosses} list={list} />
        ))
      }
    </div>
  );
}

export default App;
