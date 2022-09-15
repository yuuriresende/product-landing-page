import './Banner.css'
import image from '../../assets/column-right.jpg'
import Newsletter from '../Newsletter/Newsletter'
import Card from '../Card/Card'
const Banner = () => {
    return(
        <section className='banner'>
            <div className='banner-row'>
                <div className='banner-left-column'>
                    <h1>Marketing That <br/> Generate Results</h1>
                    <p className='banner-subtitle'>Focus on engaging, reusable content that decrease the cost per leads while helps you to increase profits margin.</p>
                </div>
                <div className='banner-right-column'>
                    
                </div>                
            </div>
            <Card className='banner-newsletter'>
                <Newsletter/>
            </Card>
        </section>
    )
}

export default Banner