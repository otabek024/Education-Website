import React from 'react'
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Body1 from './components/body-1/Body1';
import Body2 from './components/body2/Body2';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Team from './components/team/Team';
import SignUp from './components/signUp/SignUp';
import Contact from './components/contact/Contact';

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Body1 />
      <Body2 />
      <About />
      <Courses />
      <Team />
      <SignUp />
      <Contact />
    </>
  );
}

export default App;
