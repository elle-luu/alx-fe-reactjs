import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';




function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />

      <div>
      <Header />
      <MainContent />
      <UserProfile name="Senoya" age={25} bio="Learning React at ALX!" />
      <Counter />
      <Footer />  
        </div>


    <div>
      <WelcomeMessage />
    </div>


    </>

    
  );
};

export default App;
