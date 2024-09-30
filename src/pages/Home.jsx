import './home.scss'
import Logo from "@/assets/images/logo.jpg";
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="homepage">

      <div className="homeintro">
        <h1>Exporting high quality, sustainable and eco friendly products since 1996.</h1>
        <img src={Logo} alt="Picture" />
      </div>
      <div className="homeourstory">
        <h1>Our Story</h1>
        <p>
          In 1990, We established a company named as 'Shaktirugs', where we domestically supplied rugs. Later, we started exporting to other countries mainly USA.
        </p>
        <p>Since 2005, Our company has been manufacturing and exporting multiple categories of storage items like Crunch cans, Bags, Wall and Pocket hangings etc. We export to USA, Norway, Canada, Sweden and other western & European countries.</p>
        <p>In 2019, We started a new company 'Crescent Export' in which we export these storage items.</p>
        <p>We deliver high quality ,eco friendly , sustainable and affordable products on time.</p>
        <p>Our main motive is to keep our customers happy.</p>
        <div className="enquirebutton">
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="" target='_blank'>ENQUIRE</motion.a></div>
      </div>
      <div className="homeproducts">
        <h1>Products</h1>
        <div className="slideshow"></div>
      </div>

    </div>
  )
}

export default Home