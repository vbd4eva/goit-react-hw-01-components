// import logo from './logo.svg';
import Container from './components/Container/Container'

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
      <Container>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics
          stats={statistical}
        />
      </Container>
      <Container>
        <Statistics
          title="Заголовок"
          stats={statistical}
        />
      </Container>
      <Container>
        <Friends
          friends={friends}
        />        
    </Container>
      <Container>
        <TransactionHistory
          items={transactions}
        />
    </Container>
    </div>
  );
}

export default App;
