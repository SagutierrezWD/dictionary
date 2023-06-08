import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Results from '../../components/Results'
import SearchBox from '../../components/SearchBox'
import Welcome from '../../components/Welcome'
import NotFound from '../../components/NotFound'
import Loading from '../../components/Loading'
import './style.css'

const Home = () => {
    const [data,setData] = useState(null)
    const [inputSearch,setInputSearch] = useState("")
    const [found,setFound] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {
        if(inputSearch !== ""){
            loadingStatus(true)

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
            .finally(() => loadingStatus(false))
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

    const loadingStatus = (value) => {
        setIsLoading(value)
    }

    return (
        <main>
            <Header></Header>
            <SearchBox value={inputSearch} updateInputValue={(value) => updateInputValue(value)}></SearchBox>
            {
                inputSearch === ""  && isLoading === false && <Welcome />
            }
            {
                isLoading && <Loading />
            }
            {
                found === false && isLoading === false && <div>
                    {
                        <NotFound title={data?.title} />
                    }
                </div>
            }
            {
                data && inputSearch && found && isLoading === false && <Results data={data[0]}></Results>
            }
        </main>
    )
}

export default Home