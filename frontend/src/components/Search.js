import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { getMovies, downloadMovies } from '../api/movies'

const Search = () => {
    const types = ['all', 'typeA', 'typeB', 'typeC']
    const regions = ['all', 'US', 'China', 'Australia']
    const [movies, setMovies] = useState([])

    const history = useHistory()
    const location = useLocation()

    const [activeType, setActiveType] = useState('all')
    const handleTypeChange = (type) => {
        setActiveType(type)
    }

    const [activeRegion, setActiveRegion] = useState('all')
    const handleRegionChange = (region) => {
        setActiveRegion(region)
    }

    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        changeUrl()
        const result = await getMovies({
            search,
            activeType,
            activeRegion,
        })

        setMovies(result.data)
    }

    const changeUrl = () => {
        const params = new URLSearchParams()
        params.set('search', search)
        params.set('type', activeType)
        params.set('region', activeRegion)
        history.replace({
            pathname: location.pathname,
            search: params.toString(),
        })
    }

    useEffect(() => {
        const query = new URLSearchParams(location.search)
        const search = query.get('search')
        const type = query.get('type')
        const region = query.get('region')

        setSearch(search)
        setActiveType(type || 'all')
        setActiveRegion(region || 'all')
    }, [])

    const download = async () => {
        await downloadMovies().then((response) => {
            console.log(response)
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `csv-${Date.now()}.csv`)
            document.body.appendChild(link)
            link.click()
        })
    }

    return (
        <div className="search">
            <h1>search</h1>
            <input
                type="text"
                onChange={(e) => setSearch(() => e.target.value)}
                value={search}
                placeholder="search by name, title or description"
            />
            <button onClick={handleSearch}>search</button>
            <button onClick={download}>Download</button>
            <section className="row">
                <p>type</p>
                <ul className="row">
                    {types.map((type) => (
                        <li
                            key={type}
                            onClick={() => handleTypeChange(type)}
                            className={activeType === type ? 'active' : ''}>
                            {type}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="row">
                <p>region</p>
                <ul className="row">
                    {regions.map((region) => (
                        <li
                            key={region}
                            onClick={() => handleRegionChange(region)}
                            className={activeRegion === region ? 'active' : ''}>
                            {region}
                        </li>
                    ))}
                </ul>
            </section>

            {movies.length > 0 && (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.title}>
                            {movie.title} - {movie.type} - {movie.region}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Search
