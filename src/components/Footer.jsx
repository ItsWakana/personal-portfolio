const Footer = () => {

    return (
        <footer className="bg-gray-950 text-center pb-20"> 
            <h3 className="text-4xl text-white font-semibold">Contact <span className="text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-red-800 bg-clip-text">Me</span></h3>

            <form>
                <label htmlFor="name">
                    <input type="text" id="name" />
                </label>
            </form>
        </footer>
    )
}

export default Footer;