import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import Navbar from './components/NavBar';
import Edit from './components/Edit';

function App() {
  const myWidth = 220
  return (
    <div className="App">
        <Navbar 
            drawerWidth={myWidth}
            content = {
              <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
              </Routes>
            }
        
        />
            


        
    </div>
  );
}

export default App;
