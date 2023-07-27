import "./App.scss";

import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Form from "./components/Form/Form";
import Comment from "./components/Comment/Comment";

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <Form />
      <Comment />
      
    </div>
  );
}

export default App;
