import './index.css'
import about from '../../assets/about.jpg'

function About() {

    return(
        <div className='container-about'>
            <h1 className='about-titulo'>SOBRE NÓS</h1>
            <h1 className='line'></h1>
            <div className='about-box'>
                <div className="about-img"><img className="img" src={about} alt="about"></img></div>
                <div className='about-texto'>
                    <h3 className='lista-titulo'>Perspiciatis Unde</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sed ut unde omnis iste natus error sit voluptatem doloremque laudantium.</p>
                    <h3 className='lista-titulo'>Lorem Ipsum?</h3>
                    <div className='about-list'>
                        <div className='lista'>
                            <ul>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                        <div className='lista'>
                            <ul>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )

}

export default About;