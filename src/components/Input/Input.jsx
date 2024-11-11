import s from "./Input.module.scss"
import searchIcon from '../../assets/icon.svg'
export function Input({ search, setSearch }) {
    return (
        <section className={s.container}>
            <img className={s.search} src={searchIcon} alt="search" />
            <input className={s.input} type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        </section>
    )
};

