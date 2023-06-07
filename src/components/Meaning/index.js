import './style.css'

const Meaning = ({data}) => {
    const {definitions, partOfSpeech, synonyms, antonyms} = data || {};
 
    return (
        <div className="meaning">
            <div className="meaning-head">
                <h3><span>{partOfSpeech}</span></h3>
                <h4 className="subtitle">Meaning</h4>
            </div>

            <ul>
                {
                    definitions.map(({definition, example}, indexDef) => {
                        return <li key={indexDef}>
                            <p>{definition}</p>
                            {
                                example && <p key={"ex"+indexDef} className="example">"{example}"</p>
                            }
                        </li>
                    })
                }
            </ul>

            {
                synonyms[0] &&
                <div className="more-meaning" key={"syn"}>
                    <span className="subtitle">Synonyms</span> 
                    {
                        synonyms.map((synonym, indexSyn) => <p key={indexSyn} className="featured-color">{synonym}</p>)
                    }
                </div>
            }

            {
                antonyms[0] &&
                <div className="more-meaning" key={"ant"}>
                    <span className="subtitle">Antonyms</span> 
                    {
                        antonyms.map((antonym, indexAnt) => <p key={indexAnt} className="featured-color">{antonym}</p>)
                    }
                </div>
            }
        </div>
    )
}

export default Meaning