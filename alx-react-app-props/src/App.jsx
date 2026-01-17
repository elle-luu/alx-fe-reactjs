import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';





function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };



  return (
    <>

        <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>


      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />

      <div>
      <Header />
      <MainContent />
      <Footer />
    </div>

    <div>
      <WelcomeMessage />
    </div>


    </>

    
  );
};

export default App;
