import Profile from './components/profile/Profile';
import userData from './userData.json';

function App() {
  return (
    <>
      {/* Profile bileşeni */}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}

export default App;
