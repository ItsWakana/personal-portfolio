const Footer = () => {

    return (
        <footer className="bg-gray-950 text-center pb-20"> 
            <h3 id="contact" className="text-4xl text-white font-semibold">Contact <span className="text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-red-800 bg-clip-text">Me</span></h3>

            <div className="flex justify-center mt-5">
                <form className="w-2/4 flex flex-col gap-3 bg-orange-600 p-8 rounded-lg">
                    <div className="flex justify-center gap-3">
                        <input type="text" id="name" placeholder="Your Name" className="w-full"/>
                        {/* <label className="absolute" htmlFor="name">Your Name</label> */}

                        <input type="number" id="phone" placeholder="Your Number" className="w-full"/>
                        {/* <label className="absolute" htmlFor="phone">Your Name</label> */}
                    </div>
                    <input type="text" className="w-full" placeholder="Your Email Address"/>
                    <textarea name="messag" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                </form>
            </div>
        </footer>
    )
}

export default Footer;