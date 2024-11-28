
import Navbar from "../components/navbar"

const Tnks_page = () => {
  return (
    <div className='min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text'>

      <Navbar />
      <div className=" p-4 flex h-screen items-center justify-center">
        <div>
          <div className="flex flex-col items-center space-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28 text-green-600" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-4xl font-bold"> Felicidades, registro exitoso!</h1>
            <p className="pt-6">Dentro de poco recibiras una sorpresa en tu correo electronico.</p>

          </div>
          <div className="flex items-center justify-center  mt-4">
            <a
              href="/"
              className="mt-4 inline-flex items-center   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-sm font-medium"> Nuevo registro </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Tnks_page