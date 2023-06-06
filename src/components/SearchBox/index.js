import './style.css'

const SearchBox = () => {
    return (
        <section className="search-box">
            <input type="search" name="search" id="search" placeholder="Type a word to search..."></input>
            <i className='bx bx-search featured-color'></i>
        </section>
    )
}

export default SearchBox