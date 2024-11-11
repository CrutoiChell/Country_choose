import { useEffect } from "react"
import { Country } from "../country/Country"
import s from "./Countries.module.scss"

export function Countries({ arr, search, filtredArr, setFiltredArr }) {
    useEffect(() => {
        let copy = arr ? arr.filter(country => country.name.toLowerCase().includes(search.toLowerCase())) : []
        setFiltredArr(copy)
        // console.log(filtredArr[0].parentRegions[0].name);
    }, [arr, search])

    let res = search != '' ? filtredArr : arr

    return (
        <section className={s.container}>
            {res && res.map((item) => (
                <Country
                    name={item.name}
                    key={item.id}
                    countryCode={item.countryCode}
                    population={item.population}
                    capital={item.timezone}
                    region={item.parentRegions}
                />
            ))}
        </section>
    )
};

