import user from 'data/user'
import dataStat from 'data/dataStat'
import friends from 'data/friends'
import { Profile } from 'components/UserProfile/Profile'
import {Statistics} from 'components/UserStatistics/Statistics'
import {FriendList} from 'components/UserFriends/FriendList'

export const App=()=>{
    return (<main>
        <section>
            <h2>Задание 1</h2>
            <Profile user={user}/>
            </section>
            <section>
                <h2>Задание 2</h2>
                <Statistics title="Upload stats" data={dataStat}/>
</section>
<section><h2>Задание 3</h2>
<FriendList friends={friends}/>
</section>
    </main>)
}