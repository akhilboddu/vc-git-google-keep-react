import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

const App = () => {
  const notes = [
    {
      id: "a123",
      title: "a different title",
      text: "some text1"
    },
    {
      id: "a124",
      title: "different title 2",
      text: "some text2"
    },
    {
      id: "a125",
      title: "some title3",
      text: "some text3"
    },
    {
      id: "a126",
      title: "some title4",
      text: "some text4"
    }
  ]
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form />
      <Notes notes={notes} />
      <Modal />
    </div>
  );
}

export default App;

// use Arrow functions vs regular functions
// regular functions are calleable and constructible
// "this" inside a regular function is bound to the function
// arrow functions only one return statement