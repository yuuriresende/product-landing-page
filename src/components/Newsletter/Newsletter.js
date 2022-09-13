import './Newsletter.css'

const Newsletter = () => {
    return(
        <div>
            <p>Get the free checklist, 7 ways to improve your business</p>
            <form>
                <div className='input_control'>
                    <label>Your Name</label>
                    <input type="text"/>
                </div>
                <div className='input_control'>
                    <label>Your Email address</label>
                    <input type="text"/>
                </div>
                <button type='submit'>Download Free</button>
            </form>
        </div>
    )
}

export default Newsletter