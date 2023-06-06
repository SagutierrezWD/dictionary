import './style.css'

const SearchBox = ({value, updateInputValue}) => {



    return (
        <section className="search-box">
            <input type="search" name="search" id="search" value={value} onChange={(e) => updateInputValue(e.target.value)} placeholder="Type a word to search..."></input>
            <i className='bx bx-search featured-color'></i>
        </section>
    )
}

export default SearchBox