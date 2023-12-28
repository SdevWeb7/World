import DarkIcon from "../svg/MoonSvg.jsx";

function Header ({setDark}) {

   return (
      <header className={'bg-white flex justify-between border-b-2 border-gray-100 py-4 shadow-sm dark:bg-custom1 dark:border-custom2'}>
         <h1 className={'font-extrabold text:md sm:text-xl sm:ml-10 font-[nunito]'}>Where in the world?</h1>
         <div onClick={() => setDark(v => !v)} className="flex items-center sm:mr-10 cursor-pointer">
            <DarkIcon className={'mr-2'} />
            <p className={'font-semibold font-[nunito] text-sm sm:text-lg'}>Dark Mode</p>
         </div>
      </header>
   )
}

export default Header;