import Profile from './components/profile/Profile';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

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

      {/* TransactionHistory bileşeni */}
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
