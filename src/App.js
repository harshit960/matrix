import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

function App() {
  return (
    <div className="bg-black text-gray-300 font-monaco">
      <div className='pg-1 grid 	h-screen w-screen'>
        <div className=' navbar flex flex-row items-center justify-center z-20 bg-black'>
          <div className='basis-full flex items-center justify-center'>
            <img src='./logo.png' className='h-16  w-auto '></img></div>
          <a href='' className='basis-1/4 hidden sm:block'>Home</a>
          <a href='' className='basis-1/4 hidden sm:block'>About</a>
          <a href='' className='basis-1/4 hidden sm:block' >Contact</a>

        </div>


        <div className='relative flex items-center 
        jjustify-center  text-lg	overflow-y-auto'>
          <div className='z-10'>
            {/* <img src="./terminal.png" className=''></img> */}
            <div className='ml-5 mt-16 mr-5 '>

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
                speed={{ type: 'keyStrokeDelayInMs', value: 1 }}
              />
              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  5000,
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
      

      <div className='pg-2 h-screen w-screen bg-slate-600'>
        data
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
