import './index.css'

function Contato() {
  
    return (
      <div className="container-contato">
        <h1 className='contato-titulo'>CONTATO</h1>
        <h1 className='line'></h1>
        <div className='contato-box'>
            <div className='box-form'>
                <h4 className='form-titulo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                <form>
                    <input type="text" id="nome" placeholder='Nome'/>
                    <input type="email" id="email" placeholder='E-mail'/>
                    <input type="tel" id="telefone" name="telefone" placeholder="99 99999-9999" pattern="[0-9]{2}[0-9]{5}[0-9]{4}"></input>
                    <input type='date' id='dtnasc' name='dtnasc'></input>
                    <textarea id="msg" placeholder='Digite aqui a sua mensagem'></textarea>
                    <input id="submit" type="submit" value="Enviar"></input>
                </form>
            </div>
            <div></div>
        </div>
      </div>
    )
  }
  
  export default Contato;