import { useState } from 'react';
import '../countries/countries.css'
export default function Country({info,visitedCountryHandling,flagVisitedInfo})
    {
        const [visited,setVisited] = useState(false);
        const [isDisabled,setIsDisabled] = useState(false);
        const handleVisited = ()=>
            {
                setVisited(!visited);
            }
        console.log(info)
        const {name,flags,capital,continents,population,area,cca3
        } = info;
        console.log(info);
        const markFunction = ()=>
        {
            visitedCountryHandling(info);
            flagVisitedInfo(info.flags.png)
            setIsDisabled(true);
        }
        return (
            <div className={`inner ${visited && 'visitedCountry'}`}>
                <p>Name: <span style={{color: visited && 'purple'}}>{name.common}</span> </p>
                <p>Flag: </p> <img src= {flags.png} alt="" /><br>
                </br>
                <p>Capital: {capital}</p>
                <p>Population: {population} </p>
                <p>Continent: {continents}</p>
                <p>Area: {area}</p>
                <p>Code: {cca3}</p>
                <button onClick={markFunction} style={{marginBottom:'5px',cursor:isDisabled && 'auto'}} className={isDisabled?'marked':'going'} disabled={isDisabled}>{isDisabled?'Marked':'Mark Visible'}</button><br />
                <button onClick={handleVisited} className={visited?'visited':'going'}>{visited? 'Visited'  : 'Going'}</button>
                <p>{visited?`I have visited ${name.common} `: `I will go to ${name.common}` }</p>
            </div>
        )
    }