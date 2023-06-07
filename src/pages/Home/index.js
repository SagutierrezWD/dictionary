import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Results from '../../components/Results'
import SearchBox from '../../components/SearchBox'
import Welcome from '../../components/Welcome'
import './style.css'
import NotFound from '../../components/NotFound'

const Home = () => {
    const [data,setData] = useState(null)
    const [inputSearch,setInputSearch] = useState("")
    const [found,setFound] = useState(null)

    useEffect(() => {
        if(inputSearch !== ""){
            fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+inputSearch)
            .then((res) => res.json())
            .then((info) => {
                //Data has not been obtained
                if(info?.title)
                    isDataFounded(false)
                
                //Data has been obtained
                if(info[0])
                    isDataFounded(true)
                
                settingData(info)
            })
            .catch((e) => console.log(e))
        }else{
            resetDataValues()
        }
    }, [inputSearch])

    const settingData = (data) => {
        setData(data)
    }

    const resetDataValues = () => {
        setData(null)
    }

    const updateInputValue = (value) => {
        setInputSearch(value)
    }

    const isDataFounded = (state) => {
        setFound(state)
    }

    return (
        <main>
            <Header></Header>
            <SearchBox value={inputSearch} updateInputValue={(value) => updateInputValue(value)}></SearchBox>
            {
                data === null && inputSearch === "" && <Welcome />
            }
            {
                found === false && <div>
                    {
                        <NotFound title={data?.title} />
                    }
                </div>
            }
            {
                data && inputSearch && found && <Results data={data[0]}></Results>
            }
        </main>
    )
}

export default Home