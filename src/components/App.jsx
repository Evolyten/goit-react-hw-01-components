import { Profile } from 'components/userCard/userCard'
import { Statistic } from 'components/Statistics/statistics'
import { FriedList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/transactionHistory'
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'


export const App = () => {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistic data={data} />
      <FriedList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

