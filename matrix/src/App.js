import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

function App() {
  return (
    <div className="bg-black w-screen	h-screen">
      <div className='pg-1'>
        <img src="./terminal.png"></img>
        <div className='text-white ml-8 font-monaco'>
          <TypeAnimation
            cursor={false}
            className={CURSOR_CLASS_NAME}
            sequence={[1000,
              "hi!! I'm Harshit",
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
              2500,
              "Bearing Civil Engineering from NIT Jamshedpur.",
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
              5500,
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
              6000,
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
              6000,
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
              11500,
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
              12500,
              "I was bitten by this radioactive spider and for the 10 yrs, i have been one and only spiderman. I am pretty sure u know the rest.",
              800,
            (el) => el.classList.remove(CURSOR_CLASS_NAME),
              200,
              "wrong intro"
            ]}
            repeat={0}
            speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
            omitDeletionAnimation={true}
          />
          <br />
          <TypeAnimation
            cursor={false}
            className={CURSOR_CLASS_NAME}
            sequence={[(el) => el.classList.remove(CURSOR_CLASS_NAME),
              11500,
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
              11500,
              "I design and code beautifully simple things, and I love what I do. It have been 1 yr since i am doing this.",
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
              11500,
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
              800,
            (el) => el.classList.remove(CURSOR_CLASS_NAME),
            ]}
            repeat={0}
            speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
          />
          <br />

        </div>
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
