import Meaning from '../../components/Meaning'
import Phonetic from '../../components/Phonetic'
import Source from '../Source'
import './style.css'

const Results = () => {
    return ( <>
        <section className="results">
            <Phonetic></Phonetic>

            <Meaning type={"noun"}/>
            <Meaning type={"verb"}/>
        </section>

        <Source></Source>
        </>
    )
}

export default Results