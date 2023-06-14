import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { Children, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "./App.css";

export default function App() {
  // let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const name = "";
  // if (name) return <h1>Hello {name}</h1>;

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    // <h1>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </h1>
    // <div>
    //   <Alert>
    //     Hello <span>World</span>
    //   </Alert>
    // </div>
    // <div>
    //   {alertVisible && (
    //     <Alert onClose={() => setAlertVisibility(false)}>Test Alert</Alert>
    //   )}
    //   <Button
    //     onClick={() => {
    //       setAlertVisibility(true);
    //     }}
    //   >
    //     My Button
    //   </Button>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
