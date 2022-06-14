import './App.css';
import { Routes, Route } from "react-router-dom";
import TeamDirectory from './screens/TeamDirectory';
import TeamStats from './screens/TeamStats';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TeamDirectory />} />
        <Route path='/:id' element={<TeamStats />} />
      </Routes>
    </div>
  );
}

export default App;

