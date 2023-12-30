const Navbar = () => { 
    
    return (

    
    <>
    <header className="relative  lg:px-16 px-4 backdrop-blur-sm bg-white/30 flex flex-wrap items-center py-4 shadow-md">
    <div className="flex-1 flex  ">
        <img src="../assets/logo.png" className="h-12 w-12 rounded-full"/>
        <a href="#" className="text-2xl text-white font-bold ml-4 ">Expense Tracker</a>
    </div>

    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><a className="md:p-4 py-3 px-0 block hover:text-white" href="#add">Add Expense</a></li>
                <li><a className="md:p-4 py-3 px-0 block hover:text-white" href="#list">Expense List</a></li>
                <li><a className="md:p-4 py-3 px-0 block hover:text-white" href="#total">Total</a></li>
                <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:text-white" href="#owed">Amount Owed</a></li>
            </ul>
        </nav>
    </div>
</header>
    
    </>

    ) 
}
    
    export default Navbar