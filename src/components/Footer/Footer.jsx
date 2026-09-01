import './Footer.css'

function Footer(){ 
    const year = new Date().getFullYear(); 

    return( 
        <footer className='site-footer'> 

            <p> 
                &copy;{year} Manikanta. Built with React🌐 
            </p>

            <nav className="social-links" aria-label="Social links">
                <a
                    href="https://github.com/manikantakardalli"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/manikanta-kardalli-6a7165414/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </nav>

        </footer> 
    ) 
}

export default Footer;