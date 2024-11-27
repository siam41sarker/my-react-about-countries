import { useState } from "react";
import "./countries.css";
import { useEffect } from "react";
import Country from "../country/Country";
export default function Countries() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((e) => console.log(e));
  }, []);
  const [visitedCountry,setVisitedCountry] = useState([]);
  const [visitedFlag,setVisitedFlag] = useState([]);
  const flagVisitedInfo = (flag)=>
        {
            console.log("flag:"+flag)
            const newVisitedFlag = [...visitedFlag,`${flag}`];
            setVisitedFlag(newVisitedFlag);
        }
  const visitedCountryHandling = (country)=>
        {
            const newVisitedCountry = [...visitedCountry,country]
            setVisitedCountry(newVisitedCountry);
        }
  return (
    <div className="outer">
      <h3>Total Country : {country.length} </h3>
      <div>
        <p>Total visited country: {visitedCountry.length} </p>
        <ul>
            {visitedCountry.map(eachCountry=><li key={eachCountry.ccn3}>{eachCountry.name.common}</li>)}
        </ul>
        <div className="flagVisited">
            {visitedFlag.map((eachMap,indx)=><img key={indx} src={eachMap} alt="" />)}
        </div>
      </div>
      <div className="sorting">
        {country.map((data) => (
          <Country key={data.ccn3} visitedCountryHandling={visitedCountryHandling} flagVisitedInfo={flagVisitedInfo} info={data}></Country>
        ))}
      </div>
    </div>
  );
}
