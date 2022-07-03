import {Main} from 'Common/Main.styled'
import {Section} from 'Common/Section.styled'
import user from 'data/user';
import dataStat from 'data/dataStat';
import friends from 'data/friends';
import transactions from 'data/transactions';
import { Profile } from 'components/UserProfile/Profile';
import {Statistics} from 'components/UserStatistics/Statistics';
import {FriendList} from 'components/UserFriends/FriendList';
import {TransactionHistory} from 'components/UserTransactionHistory/TransactionHistory';

export const App=()=>{
    return (<Main>
        <Section>
            <h2>UserProfile</h2>
            <Profile user={user}/>
            </Section>
            <Section>
                <h2>UserStatistics</h2>
                <Statistics title="Upload stats" data={dataStat}/>
</Section>
<Section><h2>UserFriends</h2>
<FriendList friends={friends}/>
</Section>
<Section><h2>UserTransactionHistory</h2>
<TransactionHistory items={transactions}/>
</Section>
    </Main>)
}