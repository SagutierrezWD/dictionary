import Header from '../../components/Header'
import Results from '../../components/Results'
import SearchBox from '../../components/SearchBox'
import Source from '../../components/Source'
import './style.css'

const Home = () => {
    return (
        <main>
            <Header></Header>
            <SearchBox></SearchBox>
            <Results></Results>
        </main>
    )
}

export default Home