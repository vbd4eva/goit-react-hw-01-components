// import logo from './logo.svg';
import user from './data/user.json';
import Profile from './components/Profile/';

import statistical from './data/statistical-data.json'
import Statistics from './components/Statistics/';

import friends from './data/friends.json';
import Friends from './components/FriendList/';

import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/';

function App() {
  return (
    <div>

      <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      
      <Statistics
        stats={statistical}
      />
      <Statistics
        title="Заголовок"
        stats={statistical}
      />

      <Friends
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />
    </div>
  );
}

export default App;
