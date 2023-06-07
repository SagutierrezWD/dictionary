import Meaning from '../../components/Meaning'
import Phonetic from '../../components/Phonetic'
import Source from '../Source'
import './style.css'

const Results = ({data}) => {
    const {word, phonetic, phonetics, meanings, sourceUrls} = data || {};
    return ( <>
        <section className="results">
            {
                meanings && <Phonetic data={{word, phonetic, phonetics}}/>
            }
            {
                meanings && meanings.map((data, indexMeanings) => <Meaning data={data} key={indexMeanings}/>)
            }
        </section>

        {
            sourceUrls && <Source url={sourceUrls[0]}></Source>
        }
        </>
    )
}

export default Results