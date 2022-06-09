import './index.css'
import icon1 from '../../assets/about.png'
import icon2 from '../../assets/keyboard.png'
import icon3 from '../../assets/mobile.png'
import icon4 from '../../assets/settings.png'

function Features() {
    
    return(
        <div className='container-features'>
            <h1 className='features-titulo'>FEATURES</h1>
            <h1 className='line'></h1>
            <div className='features-box'>
                <div className='box'>
                    <div className='features'><img className='feature-icon' src={icon1}></img></div>
                    <h3>LOREM IPSUM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='box'>
                    <div className='features'><img className='feature-icon' src={icon2}></img></div>
                    <h3>LOREM IPSUM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='box'>
                    <div className='features'><img className='feature-icon' src={icon3}></img></div>
                    <h3>LOREM IPSUM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='box'>
                    <div className='features'><img className='feature-icon' src={icon4}></img></div>
                    <h3>LOREM IPSUM</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            
        </div>
    )

}

export default Features;