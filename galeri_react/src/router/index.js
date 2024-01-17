import {Routes, Route} from 'react-router-dom';

import Home from '../halaman/Home.js';
import Contact from '../halaman/Contact.js';
import About from "../halaman/About.js";
import Foto from "../halaman/Foto.js";

function MyRouter(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/foto" element={<Foto />} />
      </Routes>
    );
}

export default MyRouter;