import './App.css';
import { Routes, Route } from "react-router-dom";
import TeamDirectory from './screens/TeamDirectory';
import TeamInfo from './screens/TeamInfo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TeamDirectory />} />
        <Route path='/:id' element={<TeamInfo />} />
      </Routes>
    </div>
  );
}

export default App;

