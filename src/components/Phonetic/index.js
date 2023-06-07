import './style.css'

const Phonetic = ({data}) => {
    const {word, phonetic, phonetics} = data || {};
    const getAudioUrl = (phonetics) => {
        if(phonetics){
            //Getting audio url
            let data = phonetics.filter((reg) => reg.audio !== "")
            if(data !== []){
                return data[0]
            }

            return []
        }
    }
    
    const {audio} = getAudioUrl(phonetics) || {};

    return (
        <div className="about-word">
            <div className="word">
                <h2>{word}</h2>
                <span className="featured-color">{phonetic}</span>
            </div>
            
            {
                phonetics && audio &&
                <div className="spell">
                    <i className='bx bx-play'></i>
                </div>
            }
        </div>
    )
}

export default Phonetic