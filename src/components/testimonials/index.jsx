import './index.css'
import face1 from '../../assets/face1.jpg'
import face2 from '../../assets/face2.jpg'
import face3 from '../../assets/face3.jpg'
import face4 from '../../assets/face4.jpg'
import face5 from '../../assets/face5.jpg'
import face6 from '../../assets/face6.jpg'

function Testimonials() {
    
    return(
        <div className='container-testimonials'>
            <h1 className='testimonials-titulo'>O QUE DIZEM OS CLIENTES</h1>
            <h1 className='line'></h1>
            <div className='testimonials-box'>
                <div className='testimonial'>
                    <div className='testomial-image'>
                        <img className='image-face' src={face1}></img>
                    </div>
                    <div className='testimonial-texto'>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        <h4>- Kévin Matos</h4>
                    </div>
                </div>
                <div className='testimonial'>
                    <div className='testomial-image'>
                        <img className='image-face' src={face2}></img>
                    </div>
                    <div className='testimonial-texto'>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        <h4>- Guilherme Laranjeira</h4>
                    </div>
                </div>
                <div className='testimonial'>
                    <div className='testomial-image'>
                        <img className='image-face' src={face3}></img>
                    </div>
                    <div className='testimonial-texto'>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        <h4>- Lunna Alcoforado</h4>
                    </div>
                </div>
                <div className='testimonial'>
                    <div className='testomial-image'>
                        <img className='image-face' src={face4}></img>
                    </div>
                    <div className='testimonial-texto'>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        <h4>- Soraia Aquino</h4>
                    </div>
                </div>
                <div className='testimonial'>
                    <div className='testomial-image'>
                        <img className='image-face' src={face5}></img>
                    </div>
                    <div className='testimonial-texto'>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        <h4>- Karina Cambezes</h4>
                    </div>
                </div>
                <div className='testimonial'>
                    <div className='testomial-image'>
                        <img className='image-face' src={face6}></img>
                    </div>
                    <div className='testimonial-texto'>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        <h4>- Ravidson Afonso</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Testimonials;