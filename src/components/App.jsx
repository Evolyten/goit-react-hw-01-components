import { Profile } from 'components/profile/profile'
import { Statistic } from 'components/statistics/statistics'
import { FriedList } from './friendList/FriendList'
import { TransactionHistory } from './transactionHistory/transactionHistory'
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'


export const App = () => {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistic stats={data} title='upload stats' />
      <FriedList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

