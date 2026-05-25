import React, { useState } from "react";
import {
  Menu,
  X,
  Coffee,
  Heart,
  Star,
  CupSoda,
  Cake,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti"; // ✅ FIXED: Missing import
import Coffeebg from "../assets/Coffeebg.png";
import maincup from "../assets/maincup.png";
import banner from "../assets/banner.jpg";
import appstore from "../assets/app_store.png";
import playstore from "../assets/play_store.png";
import aboutImg from "../assets/about-us.jpg";
import worldMap from "../assets/world-map.png";

export default function Hero() {
  const links = [
    { name: "Home", id: "#hero" },
    { name: "About Us", id: "#about" },
    { name: "Menu", id: "#menu" },
    { name: "Order", id: "#order" },
    { name: "Location", id: "#location" },
  ];
  const socials = [
    { icon: <Facebook />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Instagram />, href: "#" },
    { icon: <Linkedin />, href: "#" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    zipcode: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const bgImage = {
    backgroundImage: `url(${Coffeebg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const menuData = [
    {
      category: "Coffee",
      icon: <Coffee className="w-6 h-6 text-yellow-600" />,
      items: [
        { name: "Espresso", price: "$3.50", desc: "Rich & bold classic shot" },
        { name: "Cappuccino", price: "$4.50", desc: "Espresso with milk foam" },
        { name: "Latte", price: "$4.00", desc: "Smooth espresso with steamed milk" },
      ],
    },
    {
      category: "Cold Drinks",
      icon: <CupSoda className="w-6 h-6 text-yellow-600" />,
      items: [
        { name: "Iced Americano", price: "$3.80", desc: "Chilled espresso over ice" },
        { name: "Cold Brew", price: "$4.20", desc: "Slow brewed for bold flavor" },
        { name: "Iced Latte", price: "$4.50", desc: "Creamy & refreshing" },
      ],
    },
    {
      category: "Pastries",
      icon: <Cake className="w-6 h-6 text-yellow-600" />,
      items: [
        { name: "Croissant", price: "$2.50", desc: "Flaky, buttery goodness" },
        { name: "Blueberry Muffin", price: "$3.00", desc: "Soft & sweet with berries" },
        { name: "Chocolate Cake", price: "$4.80", desc: "Rich indulgent slice" },
      ],
    },
  ];

  return (
    <main>
      {/* ================== HERO SECTION ================== */}
      <section
        id="hero"
        className="relative flex flex-col justify-center items-center h-screen w-full overflow-hidden text-center px-6"
        style={bgImage}
      >
        {/* Navbar */}
        <div className="absolute top-0 right-0 w-full z-50">
          <motion.button
            className="absolute top-6 right-6 text-white focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.85, rotate: 90 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>

          {/* Slide-in Navbar */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: isOpen ? 0 : "100%", opacity: isOpen ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="absolute top-0 right-0 h-screen w-64 bg-black/90 backdrop-blur-md shadow-xl"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-10 text-xl font-semibold">
              {links.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 30 }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                >
                  <a
                    href={item.id}
                    onClick={() => setIsOpen(false)}
                    className="relative group text-yellow-500 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Background Big Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute text-[80px] sm:text-[150px] md:text-[250px] lg:text-[320px] font-black uppercase tracking-tighter text-white/10 select-none leading-none text-center"
        >
          Blvck <br /> Tumbler
        </motion.h1>

        {/* Cup Image */}
        <motion.div
          initial={{ y: 80, opacity: 0, rotate: 5 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            y: -25,
            rotate: -5,
            scale: 1.08,
            boxShadow: "0px 20px 60px rgba(255, 215, 0, 0.25)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative z-20 w-[90%] max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] aspect-[5/4] bg-contain bg-no-repeat bg-center cursor-pointer"
          style={{ backgroundImage: `url(${maincup})` }}
        ></motion.div>
      </section>

      {/* ================== ABOUT US SECTION ================== */}
      <section
        id="about"
        className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-900 py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="About Coffee"
              className="w-full max-w-xl mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition duration-700"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ x: 80, opacity: 0, filter: "blur(8px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              About <span className="text-yellow-600">Us</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              At <span className="font-semibold text-gray-900">Blvck Tumbler</span>, coffee
              isn’t just a drink — it’s an{" "}
              <span className="text-yellow-600 font-medium">experience</span>.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We craft every cup with passion, dedication, and artistry. Our beans are
              sourced from the finest farms and roasted to perfection for bold, unique
              flavors.
            </motion.p>

            {/* Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4"
            >
              {[
                {
                  icon: <Coffee className="w-10 h-10 text-yellow-600" />,
                  title: "Freshly Brewed",
                  desc: "Only premium beans",
                },
                {
                  icon: <Heart className="w-10 h-10 text-yellow-600" />,
                  title: "Made with Love",
                  desc: "Passion in every sip",
                },
                {
                  icon: <Star className="w-10 h-10 text-yellow-600" />,
                  title: "Top Rated",
                  desc: "Customer favorite café",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.2 + 0.8 }}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    rotate: [0, -2, 2, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center text-center space-y-2 cursor-pointer select-none bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  {feature.icon}
                  <p className="font-semibold">{feature.title}</p>
                  <span className="text-sm text-gray-500">{feature.desc}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================== MENU SECTION ================== */}    

<section
  id="menu"
  className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
>
  {/* Ambient Glow Background */}
  <div className="absolute -top-32 -left-32 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-25"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>

  {/* Heading */}
  <div className="max-w-6xl mx-auto text-center mb-16 relative">
    <motion.h2
      initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="text-5xl font-extrabold text-gray-900"
    >
      Our <span className="text-yellow-600">Menu</span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
    >
      Freshly brewed coffee, delightful drinks, and pastries crafted for every mood.
    </motion.p>
  </div>

  {/* Menu Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
    {menuData.map((section, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: i * 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{
          y: -12,
          scale: 1.03,
          boxShadow: "0px 20px 60px rgba(0,0,0,0.1)",
        }}
        whileTap={{ scale: 0.98 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 transition cursor-pointer"
      >
        {/* Card Header */}
        <div className="flex items-center gap-2 mb-6">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.6 } }}
            className="text-yellow-600"
          >
            {section.icon}
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900">{section.category}</h3>
        </div>

        {/* Items */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-4"
        >
          {section.items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex justify-between items-start border-b border-gray-100 pb-3 hover:pl-2 transition-all"
            >
              <div>
                <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <span className="text-yellow-600 font-bold">{item.price}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    ))}
  </div>
</section>
      {/* ================== ORDER SECTION ================== */}   


 <section
  id="order"
  className="flex justify-between items-center min-h-screen bg-white px-10 relative"
>
  {/* Left Form */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="w-full md:w-1/2 max-w-md space-y-6"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-gray-900 leading-snug"
    >
      Buy our <br /> products from anywhere
    </motion.h2>

    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        {[
          { type: "text", name: "name", placeholder: "Name", value: form.name },
          { type: "email", name: "email", placeholder: "Email", value: form.email },
          { type: "text", name: "country", placeholder: "Country", value: form.country },
          { type: "text", name: "zipcode", placeholder: "Zipcode", value: form.zipcode },
        ].map((field, i) => (
          <motion.input
            key={i}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={field.value}
            onChange={handleChange}
            required
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="border rounded-md p-3 w-full"
          />
        ))}
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-md shadow hover:bg-yellow-700 transition"
      >
        Order Now
      </motion.button>
    </motion.form>
  </motion.div>

  {/* Right Side Image */}
  <motion.div
    initial={{ opacity: 0, x: 80, scale: 0.9 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="hidden md:block w-1/2"
  >
    <motion.img
      src={worldMap}
      alt="World Map"
      className="w-full opacity-80"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    />
  </motion.div>

  {/* Centered Popup Modal */}
  <AnimatePresence>
    {showPopup && (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowPopup(false)} // close on background click
      >
        {/* Confetti 🎉 */}
        <Confetti recycle={false} numberOfPieces={400} gravity={0.3} />

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-md w-full text-center relative border border-white/40"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            🎉 Congratulations! 🎉
          </h3>
          <p className="text-gray-800 mb-6">
            Thank you{" "}
            <span className="text-yellow-600 font-semibold">
              {form.name || "Customer"}
            </span>
            , your order has been successfully placed!  
            We’ll deliver it to{" "}
            <span className="font-semibold">{form.country}</span>.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPopup(false)} // close button
            className="px-6 py-3 bg-yellow-600 text-white rounded-xl font-semibold shadow-md hover:bg-yellow-700 transition"
          >
            Close
          </motion.button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>


     

      {/* ================== LOCATION SECTION ================== */}
      <section
        id="location"
        className="relative w-full] mx-auto h-[500px] bg-cover bg-center flex items-center rounded-3xl overflow-hidden"
        style={{ backgroundImage: `url(${banner})` }}
      >
        
        

        {/* Content on Right */}
        <div className="relative z-10 w-full flex justify-end px-6">
          <div className=" p-8  max-w-md text-center md:text-left">
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-black-900 mb-4"
            >
              Download the App
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-black-600 text-lg mb-6"
            >
              Get access to our products anytime, anywhere with just a tap.
            </motion.p>

            {/* Store Buttons */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <motion.img
                src={playstore}
                alt="Google Play"
                className="w-40 cursor-pointer hover:scale-105 transition-transform"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src={appstore}
                alt="App Store"
                className="w-40 cursor-pointer hover:scale-105 transition-transform"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================== FOOTER SECTION ================== */}


<section>
<footer className="bg-gradient-to-r bg-yellow-600 text-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* Brand Info */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h2 className="text-3xl font-extrabold tracking-wide">☕ Blvck Tumbler</h2>
      <p className="text-yellow-100 leading-relaxed">
        Brewing happiness, one cup at a time. <br />
        Your daily dose of warmth & energy.
      </p>
      <p className="flex items-center gap-2 text-white/90">
        📞 +1 (123) 456-7890
      </p>
      <p className="flex items-center gap-2 text-white/90">
        📍 Noida, Uttar Pradesh
      </p>
    </motion.div>

    {/* Quick Links */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold border-b-2 border-white/50 inline-block pb-1">
        Quick Links
      </h3>
      <ul className="space-y-3 text-lg">
        {links.map((link, i) => (
          <motion.li
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.1, x: 5, color: "#fff" }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer hover:text-white"
          >
            <a href={link.id}>{link.name}</a>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Social + Payments */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold border-b-2 border-white/50 inline-block pb-1">
        Follow Us
      </h3>

      <div className="flex gap-5 justify-start">
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            whileHover={{ scale: 1.3, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-white/90 hover:text-white text-3xl"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Payment Methods */}
      <div>
        <p className="mb-2 text-lg font-semibold">We accept</p>
        <div className="flex gap-3 flex-wrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-8 rounded shadow-md bg-white p-1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" className="h-8 rounded shadow-md bg-white p-1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 rounded shadow-md bg-white p-1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="Rupay" className="h-8 rounded shadow-md bg-white p-1" />
        </div>
      </div>
    </motion.div>
  </div>

  {/* Bottom Strip */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-center text-white/80 mt-12 pt-6 border-t border-white/30 text-sm"
  >
    © {new Date().getFullYear()} Blvck Tumbler. All rights reserved.
  </motion.div>
</footer>
 </section>

    </main>
  );
}
