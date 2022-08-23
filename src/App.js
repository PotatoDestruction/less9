import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import News from './components/News/News.jsx'
import Services from './components/Services/Services'
import Completed from './components/Completed/Completed.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import PostComments from './components/News/Comments/PostComments.jsx'

function App() {
  return (
    <div className="App">
      <Routes>       
      <Route path='/' element={<Main />} />
      <Route path='/About' element={<AboutUs />} />
      <Route path='/News' element={<News />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Completed' element={<Completed />} />
      <Route path='/Contacts' element={<Contacts />} />
      <Route path='/Comments' element={<PostComments />} />
      <Route path='*' element={<h1>Wrong adrres</h1>} />
      </Routes >
    </div>
  );
}

export default App;
