import './App.css';
import Hero from './components/Hero'
import heroImage from './assets/heroImage.webp'
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Hero image={heroImage} name='Perry Chambers Jr' title='Software Engineer'/>
      {/* <About bio='Bio' objective='objective' description='description'/> */}
      <Footer />
    </div>
  );
}

export default App;
