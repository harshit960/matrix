import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

function App() {
  return (
    <div className="bg-black text-gray-300 font-monaco">
      <div className='pg-1 grid'>
        <div className='navbar flex flex-row items-center z-20'>
          <div className='basis-1/2'>
            <img src='./logo.png' className='h-14 w-auto m-5 ml-10 '></img></div>
          <a href='' className='basis-1/4 '>Home</a>
          <a href='' className='basis-1/4 '>About</a>
          <a href='' className='basis-1/4 '>Contact</a>

        </div>


        <div className='	  relative flex items-center 
        jjustify-center h-screen text-lg	'>
          <div className='   z-10'>
            {/* <img src="./terminal.png" className=''></img> */}
            <div className='ml-10 mt-16 mr-10 '>

              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  500,
                  ">>> console.log(pain)",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 10 }}
              />
              <br />
              <br />

              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  700,
                  "Loading",
                  10, "Loading..",
                  10, "Loading...",
                  50,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={3}
                speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
              />
              <br />
              <br />
              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[2500,
                  "Hey there! I'm [Your Name], a tech enthusiast and web developer with a passion for crafting innovative digital experiences. With expertise in React, Python, Selenium web scraping, and Premiere Pro, I thrive on pushing boundaries and creating something extraordinary. Oh, and did I mention I have a penchant for freelancing too? Let's dive into the exciting world of technology and create something exceptional together!",
                  400,
                  (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 5 }}
              />
              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  13000,
                  "I design and code beautifully simple things, and I love what I do. It have been 1 yr since i am doing this.",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 1 }}
              />
              <br />



            </div>
            <div />
          </div>

          
        </div>
        <img src=
            "./vid.gif"
            className="absolute -z-5  
             min-h-full brightness-50	min-w-full">
          </img>
        </div>
      <style global jsx>{`
      .custom-type-animation-cursor::after {
        content: '|';
        animation: cursor 1.1s infinite step-start;
      }
      @keyframes cursor {
        50% {
          opacity: 0;
        }
      }
    `}</style>
    </div>
  );
}

export default App;
