export default function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p className="para">fatimarasheed@gmail.com</p>
                        <p className="para">01234676573</p>
                        <div className="icons">
                            <a href="https://www.google.com/search?q=facebook"> <img src="./fb.png" alt="fb" className="icon" /> </a>
                                
                            <a href="https://www.bing.com/search?q=instagram"> <img src="./insta.png" alt="instagram"
                                className="icon" /></a>
                                
                            <a href="https://www.bing.com/search?q=linkdin"> <img src="./linkdin.png" alt="linkdin"
                                className="icon" /></a>
                            <a href="https://www.bing.com/search?q=twitch> "><img src="./hello.jpeg" alt="twitter" className="icon"/></a>
                            
                        </div> 
                        <a href="./cv.pdf" download={""} className="btn">Download CV</a>
                        </div>
                    <div className="contact-right">
                        <form >
                            <input type="text" name="Name" placeholder="Your Name" />
                            <input type="email" name="email" placeholder="Your Email" />
                            <textarea name="Message" id="" rows={10} placeholder="Message"></textarea>
                            <button className="btn btn2" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p>Copyright@Fatima🤍Start Your Journey With Me</p>
            </div>
       </div>
    )
}