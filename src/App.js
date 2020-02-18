import React, { useState, useEffect } from 'react';
import Pages from './pages';
import Canvas from './Canvas';
import LinearProgress from '@material-ui/core/LinearProgress';
import {PoiContext} from "./PoiContext/PoiContext";

function LoadingPage() {

  return (
    <div>
      <LinearProgress/>
    </div>
  );
}

const hobbiesDrawings = [
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49c7b90-64db-4ebd-af85-5ac876c901d2/d1xu78k-f8cba24d-80ba-4937-adc6-7596084ccfe5.png/v1/fill/w_600,h_480,q_80,strp/naruto_e_il_quarto_hokage_by_randalf89_d1xu78k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgwIiwicGF0aCI6IlwvZlwvZjQ5YzdiOTAtNjRkYi00ZWJkLWFmODUtNWFjODc2YzkwMWQyXC9kMXh1NzhrLWY4Y2JhMjRkLTgwYmEtNDkzNy1hZGM2LTc1OTYwODRjY2ZlNS5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.jXS_Z_1c8eE01R-CdH_UkMyCq82cYxBj-8Llyjr4IkE',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49c7b90-64db-4ebd-af85-5ac876c901d2/d1xu9mn-6bfd7807-949f-4c63-85f8-ce05396b7ff4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0OWM3YjkwLTY0ZGItNGViZC1hZjg1LTVhYzg3NmM5MDFkMlwvZDF4dTltbi02YmZkNzgwNy05NDlmLTRjNjMtODVmOC1jZTA1Mzk2YjdmZjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hMklIzLMkUiSR8T7q8n4GZ1LEc8pi3xGaqRSG-9NfmM',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49c7b90-64db-4ebd-af85-5ac876c901d2/d1xu9gt-d0a3a5ae-b39b-4c8c-bcf5-aa7491aef5c2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0OWM3YjkwLTY0ZGItNGViZC1hZjg1LTVhYzg3NmM5MDFkMlwvZDF4dTlndC1kMGEzYTVhZS1iMzliLTRjOGMtYmNmNS1hYTc0OTFhZWY1YzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NJ8kiC1Zl5LnCNCPvb1LVTMm78PbJFuVhBWb7nWm8ro',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49c7b90-64db-4ebd-af85-5ac876c901d2/d1xu7fz-f6e7e8db-41e5-44ac-bd11-46ef35e008fe.jpg/v1/fill/w_600,h_420,q_75,strp/randalf_e_ninagirl_by_randalf89_d1xu7fz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIwIiwicGF0aCI6IlwvZlwvZjQ5YzdiOTAtNjRkYi00ZWJkLWFmODUtNWFjODc2YzkwMWQyXC9kMXh1N2Z6LWY2ZTdlOGRiLTQxZTUtNDRhYy1iZDExLTQ2ZWYzNWUwMDhmZS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.byrYkQqdjODqvNRsamAOdMMJsovcux4ANjT-TL2oHwk',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49c7b90-64db-4ebd-af85-5ac876c901d2/d1xu8hz-7da63628-b392-44ce-bebb-7e29a8052073.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0OWM3YjkwLTY0ZGItNGViZC1hZjg1LTVhYzg3NmM5MDFkMlwvZDF4dThoei03ZGE2MzYyOC1iMzkyLTQ0Y2UtYmViYi03ZTI5YTgwNTIwNzMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ilBi9NWJ-tFPvA66mowHcgG2tnPsK4LImhSfueMnuaU'
]

const hobbyIntro = 'When I was a child I had always liked to create experiences for other people. One of my first hobby was drawing fan made comics inspired by Japanese manga. I also enjoyed creating cardboard games about those, something not very distant from Pokemon cards or Monopoly, but Dragon Ball style. '

function App() {
  // state vars
  const [user, setUser] = useState(null);
  const [init, setInit] = useState(false);

  // just const vars
  const hobbies = {
    intro: hobbyIntro,
    drawings: hobbiesDrawings
  }
  
  // WIP
  // const currentPoi = React.useRef({x: 50, y:50});
  let currentPoi = {x: -1, y:-1};
  console.log("app render");

  const onScrollPage = (e) => {
    console.log("scrolling main page");
  }

  useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/darix989')
      .then(res => res.json())
      .then(user => {
        setUser(user);
        // CANVAS 004
        setTimeout(() => {
          // used for doing one shot animation of the UserHeader
          setInit(true);
        }, 1000);
      });
  }, []);

  if (!user) {
    return <LoadingPage/>;
  }

  return (
    // <PoiSetterContext.Provider value={ (val) => {console.log("currentPOi updated", val); currentPoi = val} }>
      <PoiContext.Provider 
        value={
          {
            getPoi: () => {return currentPoi}, 
            setPoi: (val) => {currentPoi = val;}
          }
        }
        >
        <div
          onWheel = {(e) => onScrollPage(e)}
          >
            {/* CANVAS 002 */}
            {/* <Canvas/> */}
            <Pages user={user} hobbies={hobbies} init={init} />
        </div>
      </PoiContext.Provider>
    // </PoiSetterContext.Provider>
  );
}

export default App;
