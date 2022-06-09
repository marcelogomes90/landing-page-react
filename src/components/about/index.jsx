import './index.css'
import about from '../../assets/about.jpg'

function About() {

    return(
        <div className='container-about'>
            <h1 className='about-titulo'>SOBRE NÓS</h1>
            <h1 className='line'></h1>
            <div className='about-box'>
                <div>
                    <img className="about-img" src={about} alt="about"></img>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;