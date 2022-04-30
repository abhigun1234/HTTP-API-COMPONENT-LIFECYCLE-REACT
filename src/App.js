import logo from './logo.svg';
import './App.css';
import LifecycleA from './LifecycleA';
import Posts from './Posts';
import ParentLifeCycle from './ParentLifeCycle';
import PostData from './PostData';

function App() {
  return (
    <div className="App">
     {/* <LifecycleA></LifecycleA> */}
     <ParentLifeCycle></ParentLifeCycle>
     {/* <PostData></PostData> */}
    </div>
  );
}

export default App;
