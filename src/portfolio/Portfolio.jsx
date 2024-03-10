import React,{useState} from 'react';
import './portfolio.css';
import img1 from './manwork1.png';
import img2 from './linkedin.jpg';
import img3 from './github.png';
import img4 from './manwork.jpg';
import img5 from './Gmail.jpg';
import img6 from './phone.jpg';
import img7 from './portp1.png';
import ecomimg from './ecommerce.png'
// import {resume} from './R'


function Portfolio() {
    function contactsubmit  () {
        
    
           alert("hello ")
        
    }


    function resume(){
        <img src={resume}></img>
    }

    

    
    return (
        <body>
            

            
            
            {/* <div>portfoliohome hello hi</div> */}
            <div className='head'>
                <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">RAHEEM BASHA</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className=''>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Skills</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Projects
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Contacts</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* navbar End */}

            
            

                        
            <div className='one'>
                {/* home page start */}

            <div id='home'>
                <div className='home'>
                    <div>
                    <h1>Hello, I'm <span className='raheem'>Raheem Basha</span><br></br>
                        and I am a passionate<br></br>
                        <span className='raheem'>Front End Developer</span><br></br>
                        <a href='https://www.linkedin.com/in/raheem-basha/'><img className='img2' src={img2}></img></a>
                        <a href='https://github.com/RAHEEM15'><img className='img3' src={img3}></img></a><br/>
                        
                            
                    </h1>
                    <a className='downloadcv'
                    href='https://drive.google.com/file/d/1PssLGh_9lucwq0t5wJc5vH65WOtvXnuy/view?usp=sharing'
                    type='button'
                    target='blank'>DownLOAD cv
                    </a>

                    <button  className='downloadcv'>Cirtificate</button>
                    </div>
                    
                </div>
                <div className='homeimg'>
                    <img className='img' src={img1}></img>
                </div>
                
            </div>
            {/* home page end */}

            </div>

            <br></br>
            <br></br>
            <br></br>
            
            <div className='two'>
                {/* about page start */}
            <div id='about'>
                <div className='abt1'>
                    <img className='img4' src={img4}></img>
                    <h1 className='araheem'>A RAHEEM BASHA</h1><br></br>
                    <h3 className='front'>(Front-End Developer)</h3>
                </div>
                <div className='abt2'>
                    <h1>About :</h1>
                    <h5>
                        My self A Raheem Basha, I'm Frontend Web Developer, I would like to be a part of an organization
                        Where I could gain confidence and fame using my potential in the
                        field and express my innovative creative skills for organization
                        growth and self.
                    </h5>
                    <br></br>

                    <br></br>


                    <h1>Education :</h1>         
                    <h5>*Full Stack Web Developer Course in CredoSystemz - Ongoing</h5>
                    <h5>*Bsc.Computer Science in New College - 2023</h5>    
                       </div>
            </div>
            {/* about page End */}
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div className='three'>
                {/* skills page start */}
            <div>
                <h1 className='skill'>Skills</h1>
                <h5 className='skills' >Below is a quick overview of my main technical skill sets and tools I use</h5>
                <div id='skills'>
                <div className='sk1'>
                    <h3 className='ski1'>Front-End Technology</h3><br></br>
                    <h5 className='ski2'>
                        <ul>
                            <li>HTML</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>React js</li>
                        </ul>
                    </h5>

                </div>
                <div className='sk2'>
                <h3 className='ski1'>Front-End Technology</h3><br></br>
                </div>
                </div>
            </div>
            {/* skilss page end */}

            {/* Project page start */}
            <div className='four'>
            <h1 className='skill'>Projects</h1>
            <div id='project'>
            <div className='pr1'>
                <img className='img8' src={img7} ></img>
                <br/>
                <br/>
                <h2 className='instaclonehead'>Instgram clone Design</h2>

                <br/>
                <h4>Instgram Home page Design (Instaclone) using HTML, CSS</h4>
                
            </div>
            <div className='pr2'>
                <img className='img8' src={ecomimg} ></img>

                <br/>
                <br/>
                <h2 className='ecommerce'>Ecommerce Website Design</h2>

                <br/>
                <h4>Ecommerce Home Page Design (Ecommerce Website Design) using HTML, CSS</h4>
                <br/>
                <button>source</button>                
            </div>
            <div className='pr3'>

            </div>
            </div>
            </div>
            </div>
            {/* project page end */}

            {/* contact page start */}

            <h1 className='skill'>Contact</h1>
            <div id='contact'>
                <div id='icons'>
                    <h3 className='con'><img className='img5' src={img5}></img>Gmail</h3>
                    <h3 className='con'><img className='img6' src={img6}></img>Contact Number</h3>
                    <h3 className='con'> <img className='img7' src={img2}></img> Linked in</h3>
                    {/* <h3 className='con'>Instagram</h3> */}
                </div>
                <br/>
                
                <div className='form'>
                    <form>
                        <div>
                        <h4>Name :  </h4>
                        <br/>
                        <h4>Contact No : </h4>
                        <br/>
                        <h4>E-Mail : </h4>
                        </div>
                        <br/>
                        <div>
                        <input type='text' placeholder='Enter your name'></input>
                        <br/>
                        <input type='text' placeholder='Enter your name'></input>
                        <br/>
                        <input type='text' placeholder='Enter your name'></input>
                        </div>
                   
                    </form>
                    <button className='btn' onClick={contactsubmit}>Submit</button>
                </div>
                

            </div>
            {/* contact  page end */}

            
        </body>
    );
}

export default Portfolio