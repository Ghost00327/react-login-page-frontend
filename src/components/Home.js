import LeftMain from './LeftMain';
import RightMain from './RightMain';
import "tailwindcss/tailwind.css"

function App() {
    return (
    <div className="w-screen">
        <div className="flex justify-between">     
            <LeftMain/>
            <RightMain/>
        </div>
    </div>
    );
  }
  
  export default App;