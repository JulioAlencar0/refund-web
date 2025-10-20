import logo from './assets/logo.svg'
import search from './assets/search.svg'

function App() {

  return (
    <div id='container' >
      <div className='header'>
        <img src={logo} alt="Logo" />
        <button className='btn1'>Solicitações de reembolso</button>
        <button className='btn2'>Nova solicitação</button>
      </div>
      <div className='content'>
        <h1>Solicitações</h1>
        <input className='input' type="text" placeholder='Pesquisar pelo nome' />
        <button className='search' > <img src={search} alt="" /> </button>
      </div>
    </div>
  )
}

export default App

