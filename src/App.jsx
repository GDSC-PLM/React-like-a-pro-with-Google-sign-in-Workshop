import './App.css';

// Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import TickleMe from './components/TickleMe';
import Footer from './components/Footer';

function App() {
  return (
    <body>
      <Navbar />
      <main>
        <Landing />
        <TickleMe />
      </main>
      <Footer />
    </body>
  );
}

export default App;
