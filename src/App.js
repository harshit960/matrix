import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

function App() {
  return (
    <div className="bg-black text-gray-300  overflow-hidden">
      <div className='pg-1 grid font-monaco	h-screen w-screen '>
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
                  "Hey there! I'm HARSHIT RAJ, a tech enthusiast and web developer with a passion for crafting innovative digital experiences. With expertise in React, Python, Selenium web scraping, and Premiere Pro, I thrive on pushing boundaries and creating something extraordinary. Oh, and did I mention I have a penchant for freelancing too? Let's dive into the exciting world of technology and create something exceptional together!",
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


      <div className='pg-2 w-screen font-sans bg-black pt-10 mx-10 sm:pl-10 sm:pr-10  justify-center'>
        <div className='w-full'>
          <div className='text-2xl font-bold'>
            Skills:</div>
          <div className='flex mr-4 mt-10 flex-wrap '>
            <div className='mx-2 my-2 px-2 py-4 border-2 rounded-md w-72 '>
              *React.js: I love leveraging React to build captivating and interactive user interfaces that leave a lasting impression. From sleek single-page applications to engaging UI components, React is my superpower.
            </div>
            <div className='mx-2 my-2 px-2 py-4 border-2 rounded-md w-72'>
              *Python Expert: Python is my trusty companion for building robust back-end solutions. With Django and Flask, I create efficient web applications that deliver seamless experiences and efficient workflows.
            </div><div className='mx-2 my-2 px-2 py-4 border-2 rounded-md w-72'>
              *Selenium Web Scraping: Web scraping is my secret weapon for data extraction and automation. I utilize Selenium to scrape websites, saving time and effort while gathering valuable information.
            </div><div className='mx-2 my-2 px-2 py-4 border-2 rounded-md w-72'>

              *Premiere Pro: As a Premiere Pro expert, I add a touch of creativity to videos. From editing footage to applying stunning effects and transitions, I transform raw footage into captivating stories.
            </div></div></div>
      </div>
      <div className='pro'>

        <div className="mx-10 p-2 mt-10">
          <div className="flex flex-wrap">
            <div className="mx-8 w-72 mt-16">
              <h2 className="text-2xl font-bold mb-2">Video File Converter and Uploader</h2>
              <p className="text-gray-500 font-semibold mb-0">Python, Selenium, Youtube API, Pytube</p>
              <p className="text-gray-600 text-sm	 mb-2">Jul 2023</p>
              <ul className=" pl-1 ">
                <li>Utilized Python, Selenium, and Pytube to develop a program that converts any file format to binary video, enabling easy upload and retrieval in its original form.</li>
                <li>Integrated YouTube Data API to upload the converted videos to YouTube, serving as a cloud-based storage solution.</li>
              </ul>
            </div>
            <div className="mx-8 w-72 mt-16">
              <h2 className="text-2xl font-bold mb-2">Culfest Website</h2>
              <p className="text-gray-500 font-semibold mb-0">Node.js, Next.js, Chakra UI, Git</p>
              <p className="text-gray-600 text-sm	 mb-2">Apr 2023</p>
              <ul className=" pl-1">
                <li>Developed a dynamic website using Node.js and Next.js as the primary JavaScript framework.</li>
                <li>Implemented UI using Chakra UI for a responsive and visually appealing design.</li>
                <li>Managed the project using Git for version control and collaborative development.</li>
              </ul>
            </div>
            <div className="mx-8 w-72 mt-16">
              <h2 className="text-2xl font-bold mb-2">Electron.js Freelance project</h2>
              <p className="text-gray-500 font-semibold mb-0">Electron.js</p>
              <p className="text-gray-600 text-sm	 mb-2">Jun 2023</p>
              <ul className=" pl-1">
                <li>Independently built an Electron.js desktop application with native customizable features.</li>
                <li>Implemented a file conversion system using various JavaScript libraries for enhanced functionality.</li>
              </ul>
            </div>
            <div className="mx-8 w-72 mt-16">
              <h2 className="text-2xl font-bold mb-2">Selenium Freelance project</h2>
              <p className="text-gray-500 font-semibold mb-0">Selenium, Python</p>
              <p className="text-gray-600 text-sm	 mb-2">Jul 2023</p>
              <ul className=" pl-1">
                <li>Created a data scraping bot using Selenium and Python that extracts information from multiple websites based on inputs from an Excel file.</li>
                <li>Developed a bypass mechanism for Captcha challenges using Captcha solving, advanced Selenium drivers, and proxy techniques.</li>
              </ul>
            </div>
            <div className="mx-8 w-72 mt-16">
              <h2 className="text-2xl font-bold mb-2">GrabOn</h2>
              <p className="text-gray-500 font-semibold mb-0">Flask, React.js, Selenium</p>
              <p className="text-gray-600 text-sm	 mb-2">Oct 2022</p>
              <ul className=" pl-1">
                <li>Developed a web scraping bot with Flask, React.js, and Selenium to gather product data from various sites.</li>
                <li>Utilized React.js for the frontend, communicating with the backend using REST methods and incorporating Tailwind CSS for styling.</li>
              </ul>
            </div>
          </div>
        
        <div className="mb-8 mt-10">
          <h2 className="text-2xl font-bold mb-2">Extra-Curricular Activities</h2>
          <ul className=" pl-1">
            <li>Innoreva: Member of the Web and AI team at Innoreva, actively contributing to innovative projects.</li>
            <li>Phocus: Motion graphics expert and Video Editor at Phocus, showcasing creativity through visual storytelling.</li>
            <li>Culfest: Frontend Developer and Video Editor at Culfest, contributing to an engaging and visually appealing event website.</li>
          </ul>
        </div></div>

      </div>
      <div className='m-10'>
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
