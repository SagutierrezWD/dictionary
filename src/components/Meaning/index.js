import './style.css'

const Meaning = ({type}) => {
    if(type==="noun"){
        return (
            <div className="meaning">
                <div className="meaning-head">
                    <h3><span>noun</span></h3>
                    <h4 className="subtitle">Meaning</h4>
                </div>

                <ul>
                    <li><p>A set of keys used to operate a typewriter, computer etc.</p></li>
                    <li><p>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</p></li>
                    <li><p>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</p></li>
                </ul>

                <div className="more-meaning">
                    <span className="subtitle">Synonyms</span> 
                    <p className="featured-color">electronic keyboard</p>
                    <p className="featured-color">electronic keyboard</p>
                    <p className="featured-color">electronic keyboard</p>
                    <p className="featured-color">electronic keyboard</p>
                    <p className="featured-color">electronic keyboard</p>
                    <p className="featured-color">electronic keyboard</p>
                    <p className="featured-color">electronic keyboard</p>
                </div>
            </div>
        )
    }else if(type==="verb"){
        return (
            <div className="meaning">
                <div class="meaning-head">
                    <h3><span>verb</span></h3>
                    <h4 class="subtitle">Meaning</h4>
                </div>

                <ul>
                    <li>
                        <p>To type on a computer keyboard </p>
                        <p class="example">"Keyboarding is the part of this job I hate the most."</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Meaning