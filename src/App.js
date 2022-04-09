import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/ui/Header";
import axios from "axios";
import EpisodesGrid from "./components/episodes/EpisodesGrid";

const App = () => {
    const [episods, setEpisods] = useState([])
    const [character, setCharacter] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            const episodsData = await axios('https://breakingbadapi.com/api/episodes')
            const characterData = await axios('https://breakingbadapi.com/api/characters')

            setEpisods(episodsData.data)
            setCharacter(characterData.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])

    return (
        <div className='container'>
            <Header />
            <EpisodesGrid isLoading={isLoading} episods={episods}/>
        </div>
    );
}

export default App;
