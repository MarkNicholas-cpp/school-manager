import { ReactSVG } from "react-svg"

const Search = () => {
    return <div className="relative">
        <span className="absolute inset-y-0 left-4 flex items-center justify-center">
            <ReactSVG src="/src/assets/search-normal.svg" className="w-4 h-4" />
        </span>
        <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Task"
            className="bg-[var(--color-broken-white)]  pl-10 rounded-[50px] w-full h-[35px]"
        />
    </div>
}

export default Search;