import './index.css'

function Header() {

  function gotoContato() {
    window.location.href='#contato'
  }
    
    return (
        <header>
          <div className='container-header'>
            <a className='titulo' href='#'>LANDING PAGE</a>
            <a className='contato' onClick={gotoContato}>CONTATO</a>
          </div>
        </header>
    )
}

export default Header;