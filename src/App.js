import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

function App() {
  return (
    <div className="bg-black text-gray-300 font-monaco">
      <div className='pg-1 grid 	h-screen w-screen'>
        <div className=' navbar h-16 flex flex-row items-center justify-center z-20 bg-black'>
          <div className='basis-full flex items-center justify-center sm:justify-start sm:pl-10'>
            <img src='./logo.png' className='h-16  w-auto '></img></div>
          <a href='' className='basis-1/4 hidden sm:block'>Home</a>
          <a href='' className='basis-1/4 hidden sm:block'>About</a>
          <a href='' className='basis-1/4 hidden sm:block' >Contact</a>

        </div>


        <div className='relative flex items-center 
        jjustify-center  text-lg	overflow-y-auto mb-10'>
          <div className='z-10'>
            {/* <img src="./terminal.png" className=''></img> */}
            <div className='ml-5 mt-16 mr-5 sm:ml-10 sm:mr-10 '>

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


      <div className='pg-2 h-screen w-screen bg-slate-600 pt-10 pl-5 pr-5 sm:pl-10 sm:pr-10'>
        Skills:
        <br />
        *React.js: I love leveraging React to build captivating and interactive user interfaces that leave a lasting impression. From sleek single-page applications to engaging UI components, React is my superpower.
        <br />

        *Python Expert: Python is my trusty companion for building robust back-end solutions. With Django and Flask, I create efficient web applications that deliver seamless experiences and efficient workflows.
        <br />
        *Selenium Web Scraping: Web scraping is my secret weapon for data extraction and automation. I utilize Selenium to scrape websites, saving time and effort while gathering valuable information.
        <br />
        *Premiere Pro: As a Premiere Pro expert, I add a touch of creativity to videos. From editing footage to applying stunning effects and transitions, I transform raw footage into captivating stories.
      </div>

      <div className='pg-3 h-screen w-screen bg-slate-600 pt-10 pl-5 pr-5 sm:pl-10 sm:pr-10'>
        Freelance Availability:
        I'm thrilled to explore freelance opportunities and bring innovative ideas to life. If you have an exciting project in mind or need assistance with web development, feel free to reach out! Let's create something remarkable together.
      </div>


      <div className='pg-4 h-screen w-screen bg-slate-600 pt-10 pl-5 pr-5 sm:pl-10 sm:pr-10'>
        Contact:
        I'm eager to connect and discuss potential collaborations or answer any questions you may have. Reach out to me at [Your Email Address] or connect with me on [LinkedIn Profile Link].

        Let's dive into the exciting world of technology, embrace freelance adventures, and create extraordinary digital experiences together!
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
