import Sidebar from './Components/sidebar.js';
import Chatpanel from './Components/chatpanel.js';
function App() {
  return (
    <div className='h-screen w-screen flex flex-row justify-between '>
      <Sidebar /> 
      <Chatpanel />
    </div>
  );
}

export default App;

