import './index.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import { MapPin, Phone, Envelope, Fire } from 'phosphor-react';

function Contato() {

  function barraNascimento(n){
    if(n.value.length==2)
      c.value += '/';
    if(n.value.length==5)
      c.value += '/';
  }
  
  return (
    <div href="#" id="contato" className="container-contato">
      <h1 className='contato-titulo'>CONTATO</h1>
      <h1 className='line'></h1>
      <div className='contato-box'>
        <div className='box-form'>
          <h3 className='form-titulo'>Lorem Ipsum is simply</h3>
          <form>
            <input type="text" id="nome" placeholder='Nome Completo'/>
            <input type="email" id="email" placeholder='E-mail'/>
            <input type="tel" id="telefone" name="telefone" placeholder="99 99999-9999" maxLength="11" pattern="[0-9]{2}[0-9]{5}[0-9]{4}" />
            <input type='text' id='dtnasc' name='dtnasc' placeholder='Data de Nascimento' maxLength="10" />
            <textarea id="msg" placeholder='Digite aqui a sua mensagem' />
            <input id="submit" type="submit" value="Enviar" />
          </form>
        </div>
        <div className='contato-info'>
          <h3 className='infos-titulo'>Contact Info</h3>
          <div className='phone'>
            <Phone size={24} color="#eeeeee" />
            <h4>Call Us</h4>
          </div>
          <p>+55 81 99806-6509</p>
          <div className='location'>
            <MapPin size={24} color="#eeeeee" />
            <h4>Location</h4>
          </div>
          <p>Recife, Brazil</p>
          <div className='mail'>
            <Envelope size={24} color="#eeeeee" />
            <h4>E-mail</h4>
          </div>
          <p>marcelo.sobrinho@outlook.com</p>
          <div className='fire'>
            <Fire size={24} color="#eeeeee" />
            <h4>Follow Us</h4>
          </div>
          <div className='social'>
            <a href='https://www.linkedin.com/in/marcelogomes90/' target='_blank'><img className='icons' src={linkedin}></img></a>
            <a href='https://github.com/marcelogomes90' target='_blank'><img className='icons' src={github}></img></a>
            <a href='https://www.facebook.com/profile.php?id=100025656512992' target='_blank'><img className='icons' src={facebook}></img></a>
            <a href='https://www.instagram.com/marcelogomes90/' target='_blank'><img className='icons' src={insta}></img></a>
          </div>
          
        </div>
      </div>
    </div>
  )
}
  
  export default Contato;