export function Home(){
  return(

    <div className="h-screen p-4 bg-red-700 text-white flex flex-col items-center space-y-20">
      <header className="flex justify-center container max-w-5xl p-4">
        <img className="w-40" src="/images/logo.svg" alt="logo" />
      </header>
    <div className="container p-4 max-w-5xl  items-center md:items flex-1 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">

        <div className="md:flex-1 flex justify-center">
          <img className="w-full max-w-md" src="/images/foto.png"/>
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl md:text-left font-bold text-center">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
          <button className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
            Criar minha conta
          </button>
          <button className="text-white border border white text-xl px-8 py-4 rounded-xl">
            Fazer Login
          </button>
        </div>
        </div>
    </div>
  )
}