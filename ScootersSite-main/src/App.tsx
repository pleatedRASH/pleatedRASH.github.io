import './App.css'
{/* import Navigation from './components/Navigation'; */}
import Hero from './components/Hero'

const App: React.FC = () => {
  return (
    <div className="flex">
      <div className="hidden sm:block">
        {/* <Navigation /> */}
      </div>
      <div className="flex-grow">
        {/* main shit */}
        <Hero />
      </div>
    </div>
  );
};

export default App;
