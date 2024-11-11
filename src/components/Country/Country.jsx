import s from "./Country.module.scss"

export function Country({ name, id, countryCode, population, capital, region }) {

    let res = capital.split('/')
    // console.log(res[1]);
    

    return (
        <>
            <div className={s.container} key={id}>
                <a className={s.linkWiki} href={`https://ru.wikipedia.org/wiki/${name}`}>{name}</a>
                <a href={`https://ru.wikipedia.org/wiki/${name}`} target="_blank">
                    <div className={`fib fi-${countryCode.toLowerCase()} ${s.flag}`}></div>
                </a>
                <div className={s.divBottom}>
                    <p className={s.text}>Столица: {capital == '' ? 'unknown' : res[1]}</p>
                    <p className={s.text}>Население: {population} человек</p>
                    <p className={s.text}>Регион: {region[0].name}</p>
                </div>
            </div>
        </>
    )
};

