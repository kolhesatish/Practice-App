import React from 'react';
import Alert from './components/Alert.jsx';
import { Routes, Route } from 'react-router-dom';
import Message from './components/Message.jsx'
import Timer from './components/Timer.jsx';
import Demo from './components/Demo.jsx';
import WeatherApp from './components/WeatherApp.jsx';
import "./index.css";




function App() {

  return (
    
    <div>
      <Routes>
      <Route path='/' element={<Message name="Satish" />} />
      <Route path="/alert" element={<Alert />} />
      <Route path='/timer' element={<Timer />} />
      <Route path='/car' element={<Demo />} />
      <Route path='/weatherapp' element={<WeatherApp />} />
      </Routes>
    </div>
    
  );
};

export default App;

