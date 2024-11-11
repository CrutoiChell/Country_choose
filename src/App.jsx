import { useEffect, useState } from "react";
import { Countries } from "./components/countries/Countries";
import { Input } from "./components/Input/Input";
import s from "./App.module.scss";
import planet from './assets/planet.png'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export function App() {

  let [arr, setArr] = useState(null);
  let [search, setSearch] = useState('')
  let [filtredArr, setFiltredArr] = useState(null)
  useEffect(() => {
    fetch('https://data-api.oxilor.com/rest/countries?key=Your_Key')
      .then(data => data.json())
      .then(info => setArr(info))
      .catch(error => console.log(error));
  }, []);

  // console.log(arr);



  return (
    <main className={s.container}>
      <div className={s.centred}>
        <img className={s.planet} src={planet} alt="" />
        <h1>Country Search</h1>
      </div>
        <Input
          search={search}
          setSearch={setSearch}
        />
      <Countries
        arr={arr}
        search={search}
        filtredArr={filtredArr}
        setFiltredArr={setFiltredArr}
      />
    </main>
  );
}
