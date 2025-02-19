import Profile from './components/profile/Profile';
import FriendList from './components/friendList/FriendList';
import userData from './userData.json';
import friends from './friends.json';

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

      {/* FriendList bileşeni */}
      <FriendList friends={friends} />
    </>
  );
}

export default App;
