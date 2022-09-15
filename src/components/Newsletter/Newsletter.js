import './Newsletter.css'

const Newsletter = () => {
    return(
        <div>
            <p className='news-title'>Get the free checklist, 7 ways to improve your business</p>
            <form>
                <div className='input-wrapper'>
                <div className='input_control'>
                    <label>Your Name</label>
                    <input type="text"/>
                </div>
                <div className='input_control'>
                    <label>Your Email address</label>
                    <input type="text"/>
                </div>
                <button type='submit'>Download Free</button>
                </div>
                
            </form>
        </div>
    )
}

export default Newsletter