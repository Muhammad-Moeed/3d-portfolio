import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";

import { CopilotKit } from '@copilotkit/react-core'
import { CopilotPopup } from '@copilotkit/react-ui'
import "@copilotkit/react-ui/styles.css";
import "./index.css"  

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <CopilotKit publicApiKey="ck_pub_74e2791fefbc72573de4095bbb016141">
        <CopilotPopup
          labels={{
            title: "Moeed Assistant",  
            initial: "Hi! 👋 How can I help you today?"  
          }}
          instructions="AI help that shows up right when you need it"
        
        />

        <div className="relative z-0 bg-black text-white"> 
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar hide={hide} />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </CopilotKit>
    </BrowserRouter>
  );
};

export default App;
