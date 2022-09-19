import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";

function App() {
  return (
    <>
    <h1 className="mainHeading">Word Counter</h1>
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      <div className="container my-5">
        <TextForm heading="Enter Your Text Here..." />
      </div>
    </>
  );
}

export default App;
