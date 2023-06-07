import './style.css'

const Source = ({url}) => {
    return (
        <section className="source">
            <span className="subtitle">Source</span>
            <a href={url} target='blank'>{url}</a><i className='bx bx-link-external'></i>
        </section>
    )
}

export default Source