"use client"
import CountButton from "./CountButton.jsx"
import SearchBar from "./SearchBar.jsx"
export default function Page() {
    return <div>
        <a href = "https://github.com/HAjacob/webdesign2023">My Repo</a>
        <CountButton name = "Pablo" mult = "1" />
        <CountButton name = "Pia" mult = "2" />
        <SearchBar/>
    </div>
  }