import Arrow from "../svg/Arrow.jsx";
import { useNavigate, useParams } from "react-router-dom";

function Single ({countries}) {
   const params = useParams()
   const navigate = useNavigate()

   let country = countries.filter(c => c.name === params.country)



   const handleNavigation = (alpha3Code) => {
      let name = countries.find(c => c.alpha3Code === alpha3Code).name
      window.location = '/' + name
   }

   return (
      <main className={'container-2xl mt-10'}>
      <button onClick={() => navigate('/')} type={"button"} className={'bg-white flex items-center border border-gray-300 py-1.5 px-6 rounded shadow-md ml-10 font-[nunito] text-sm text-medium dark:border-transparent dark:bg-custom1 dark:shadow-none'}><Arrow className={'inline mr-2'} />Back</button>

      {country.length > 0 ? country.map(c => <div onClick={() => navigate('/' + c.name)} key={c.name} className={'flex flex-col lg:flex-row bg-white rounded md:mx-5 mb-10 dark:bg-custom2 lg:pb-0 pb-8 mt-14'}>
      <img className={'sm:w-[569px] mx-auto lg:mx-1 object-contain rounded-t self-start'} src={c.flags.svg} alt="a" />

      <div className={'flex flex-col justify-around flex-1 mx:auto md:mr-1 lg:ml-20'}>
      <p className={'font-extrabold text-3xl my-6 lg:text-left text-center'}>{c.name}</p>

         <div className={'flex flex-col items-center md:items-start md:flex-row md:justify-around lg:justify-between'}>

            <div>
            <p className={'my-2 text-sm dark:text-custom5'}><b>Native Name:</b> {c.nativeName}</p>

            <p className={'my-2 text-sm'}><b>Population:</b> {c.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>

            <p className={'my-2 text-sm'}><b>Region:</b> {c.region}</p>
            <p className={'my-2 text-sm'}><b>Sub Region:</b> {c.subregion}</p>
               <p className={'my-2 text-sm dark:text-custom5'}><b>Capital:</b> {c.capital}</p>

            </div>
            <div className={'mx-1 mx-auto lg:mx-auto'}>
            <p className={'my-2 text-sm'}><b>Top Level Domain:</b> {c.topLevelDomain.map(d => d + ", ")}</p>
            <p className={'my-2 text-sm'}><b>Currencies: </b> {c.currencies.map(c => c.name + ', ')}</p>
            <p className={'my-2 text-sm'}><b>Languages:</b> {c.languages.map(l => l.name + ', ' )}</p>
            </div>
         </div>
         <div className={'mt-10 flex flex-col mx-auto lg:mx-1 flex-wrap'}>
            <p className={'font-bold text-center'}>Borders Countries:</p>

            <div className={'flex flex-wrap justify-center'}>
            {c.borders && c.borders.map(b => <button key={b} className={'bg-white flex items-center border border-gray-300 py-1.5 px-6 rounded shadow-md ml-10 font-[nunito] text-sm text-medium dark:border-transparent dark:bg-custom1 dark:shadow-none mt-6'} onClick={() => handleNavigation(b)}>{countries.find(c => c.alpha3Code === b).name}</button>)}
            </div>
         </div>
         </div>
   </div>) : <div>Aucun résultat !</div>}
      </main>)
}

export default Single;