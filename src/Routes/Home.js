import React from 'react'
import Navbar from '../components/Navbar';
import Bg from '../components/Bg';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Bg head2="Full Stack Developer" wht="projects"  i
      head1="HI IM ABIJITH" iurl="https://img.freepik.com/free-vector/abstract-memphis-background-with-modern-waves_1361-3396.jpg?w=900&t=st=1688744221~exp=1688744821~hmac=ac19cf040aa78434c1023ef2fd6c7633cd12ed2ebc9637c1aeec63446746369b"/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home;
