const Footer = () => {
    const labelStyling = "absolute left-2 top-5 text-md text-gray-400";

    return (
        <footer className="bg-gray-950 text-center pb-20"> 
            <h3 id="contact" className="text-4xl text-white font-semibold">Contact <span className="text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-red-800 bg-clip-text">Me</span></h3>

            <div className="flex justify-center mt-5">
                <form className="min-w-[250px] w-2/4 flex flex-col gap-3 bg-orange-600 p-8 rounded-lg">
                    <div className="flex md:flex-row flex-col justify-center gap-3">
                        <div className="w-full relative">
                            <input type="text" id="name" className="w-full" required/>
                            <label className={labelStyling} htmlFor="name">Your Name</label>
                        </div>
                        <div className="w-full relative">
                            <input type="number" id="phone" className="w-full" required/>
                            <label className={labelStyling} htmlFor="phone">Your Number</label>
                        </div>
                    </div>
                    <div className="w-full relative">
                        <input type="text" id="email"className="w-full" required/>
                        <label className={labelStyling} htmlFor="email">Your Email Address</label>
                    </div>
                    <div className="w-full relative">
                        <textarea name="message" id="message" cols="30" rows="6" className="w-full" required></textarea>
                        <label className={labelStyling} htmlFor="message">Your Message</label>
                    </div>
                    <button className="bg-white p-2 rounded-lg font-semibold" type="submit">Send Message</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer;