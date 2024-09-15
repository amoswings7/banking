import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn = {firstName:'Amos', lastName:'Wings', email:'amoswings7@gmail.com'}
    return (
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='Access and manage your account and transactions efficiently.'
                    />
                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1200.35}                    
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance:1250.36}, {currentBalance:2750.45}]}
            />
        </section>
    )
}

export default Home