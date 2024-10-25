import React from 'react'
import profileImage from './assets/IMG_9858.JPG.jpg'

const App = () => {
  return (
    <> {/** fragment */}
    <div className='Header'>
      <div className='left-side'>Portfolio.</div>
        <nav className='right-side'>
          <p className='home'>Home</p>
          <p className='about'>About</p>
          <p className='skills'>Skills</p>
          <p className='contact'>Contact</p>
        </nav>
      </div>
      <div className='middle-section'>
        <div className='description'>
          <p className='p-1'>
            hello, It's Me
            </p>
          <h1 className='h-1'>
            Amos Kipruto
            </h1>
          <h3 className='h-3'>
            And I am a Web developer
          </h3>
          <p className='p-2'>
            I am skilled in building and maintaining responsive<br /> and user-friendly websites.
          </p>
          <button className='X'></button>
          <button className='facebook'></button>
          <button className='IG'></button>
          <button className=''></button>
        </div>
        <div className='image-container'>
          {/*<img className='profile-image' src={profileImage} alt='profile-image' />*/}
        </div>
      </div>

      <div className='about-me'>
        <h1>About me</h1>
        <p className='p-content'>
        As a passionate web developer with a focus on frontend technologies, I thrive on creating engaging and user-friendly web experiences. With a background in both design and programming, I blend creativity with technical expertise to build intuitive interfaces that not only look great but also perform seamlessly.

        I specialize in HTML, CSS, and JavaScript, and I have experience with frameworks like React and Vue.js. My journey began with a curiosity for how things work, leading me to explore the world of web development. Over the years, I've worked on various projects ranging from personal websites to complex applications, always striving to improve my skills and stay updated with industry trends.

        Collaboration and continuous learning are integral to my approach. I enjoy working with teams to bring ideas to life and am always eager to tackle new challenges. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blogs and tutorials.

        Let's connect and create something amazing together!
        </p>
      </div>
    </>
  )
}

export default App