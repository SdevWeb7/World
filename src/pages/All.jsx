import SearchIcon from "../svg/SearchIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function All ({countries}) {
   const [search, setSearch] = useState('')
   const [selectedRegion, setSelectedRegion] = useState('');
   const navigate = useNavigate()
   let currentCountries = []


   if (countries.length > 0 && search.length <= 0 && selectedRegion.length <= 0) {
   currentCountries = countries.slice(10, 18)
   } else {
      currentCountries = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) && c.region.includes(selectedRegion)).slice(0, 8)
   }



   return (
      <main className={'container-2xl mt-10'}>

         <div className={'flex justify-between mx-14 relative'}>

            <SearchIcon className={'absolute top-4 left-4 cursor-pointer'} onClick={e => setSearch(e.target.value)} />

            <input className={'focus:outline-0 focus:shadow-lg shadow-md rounded py-3 pl-16 pr-6 md:min-w-[500px] font-[nunito] dark:bg-custom1 dark:text-white'} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={'Search for a country...'} />

            <select name="filter" id="filter" className={'cursor-pointer px-5 font-[nunito] focus:outline-0 dark:bg-custom1 dark:text-white'} onChange={(e) => setSelectedRegion(e.target.value)}>
               <option value={''}>Filter by Region</option>
               <option value="Europe">Europe</option>
               <option value="Africa">Africa</option>
               <option value="America">America</option>
               <option value="Asia">Asia</option>
               <option value="Oceania">Oceania</option>
            </select>
         </div>

         <div className={'flex flex-wrap mt-14 transition-all justify-evenly'}>

            {currentCountries.length > 0 ? currentCountries.map(c => {
               return <div onClick={() => navigate('/' + c.name)} key={c.name} className={'bg-white rounded md:mx-5 mb-10 dark:bg-custom1 cursor-pointer max-w-[264px] pb-8'}>
                  <img className={'w-full xs:w-[264px] xs:h-[160px] object-cover rounded-t'} src={c.flags.svg} alt="a" />
                  <p className={'font-extrabold text-lg my-5 ml-6'}>{c.name}</p>
                  <p className={'ml-6 my-2 text-sm dark:text-custom5'}><b>Capital:</b> {c.capital}</p>
                  <p className={'ml-6 my-2 text-sm'}><b>Population:</b> {c.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  <p className={'ml-6 my-2 text-sm'}><b>Region:</b> {c.region}</p>
               </div>
            }) : <div>Aucun résultat !</div>}

         </div>

      </main>
   )
}

export default All;