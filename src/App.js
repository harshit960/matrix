import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

function App() {
  return (
    <div className="">
      <div className='pg-1'>
        <div className='text-white font-monaco relative flex items-center 
        justify-center h-screen overflow-hidden '>
          <div className='w-screen h-full top-0'>
            <img src="./terminal.png" className=''></img>
            <div className='ml-10'>
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[1000,
                  "hi!! I'm Harshit",
                  400,
                  (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
              />
              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[
                   (el) => el.classList.remove(CURSOR_CLASS_NAME),
                   2500,
                  "Bearing Civil Engineering from NIT Jamshedpur.",
                  200,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
              />
              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  5000,
                  "Seems like my future is darker than this terminal.",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
              /><br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  7500,
                  "-----------------------------------------------------------------------------------------------",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 20 }}
              /><br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  7500,
                  "---------------------------------------------------------------------------------------------",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 20 }}
              />
              <br />

              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  10000,
                  "Alright! Lets do this one last time!",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
              />
              <br />

              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  12500,
                  "Hello my name is peter parker!!",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
              />
              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  14000,
                  "I was bitten by this radioactive spider and for the 10 yrs, i have been one and only spiderman. I am pretty sure u know the rest.",
                  1000,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                  200,
                  "ohh!! Wrong intro💀"
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 20 }}
                omitDeletionAnimation={true}
              />
              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  19000,
                  "Hello my name is Harshit.",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
              />
              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  22000,
                  "I design and code beautifully simple things, and I love what I do. It have been 1 yr since i am doing this.",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
              />
              <br />

              <br />
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
                  26000,
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                  800,
                (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                repeat={0}
                speed={{ type: 'keyStrokeDelayInMs', value: 10 }}
              />
              <br />
              </div>
              <div />
            </div>

            <img src=
              "./vid.gif"
              className="absolute -z-10 w-screen 
            min-w-full min-h-full max-w-none brightness-50	">
            </img>
          </div></div>
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
