
import './App.css';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Education from '../components/education';
import Contacts from '../components/contacts';

function App() {
  return (
    <div className='body'>
      <Hero/>
      <Skills/>
      <Education/>
      <Contacts/>
    </div>   
  );
}

export default App;
