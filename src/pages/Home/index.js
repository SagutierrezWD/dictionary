import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Results from '../../components/Results'
import SearchBox from '../../components/SearchBox'
import './style.css'

const Home = () => {
    const [data,setData] = useState(null)
    const [inputSearch,setInputSearch] = useState("")

    useEffect(() => {
        if(inputSearch !== ""){
            resetInputValue()

            fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+inputSearch)
            .then((res) => res.json())
            .then((info) => setData(info))
            .catch((e) => console.log(e))
        }else{
            resetInputValue()
        }
    }, [inputSearch])

    const resetInputValue = () => {
        setData(null)
    }

    const updateInputValue = (value) => {
        setInputSearch(value)
    }

    return (
        <main>
            <Header></Header>
            <SearchBox value={inputSearch} updateInputValue={(value) => updateInputValue(value)}></SearchBox>
            <Results></Results>
        </main>
    )
}

export default Home