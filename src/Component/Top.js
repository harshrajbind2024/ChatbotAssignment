import React from "react";
import "./Top.css";
import { FaChevronDown } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

import { toast } from "react-toastify";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Top() {

  const notify = () => {
    toast.success("Later Add Data");
  };
  const notify2 = () => {
    toast.warn("Later update status");
  };

  const notify3 = () => {
    toast.error("request filled with status code 500");
  };
  return (
    <>
      <div className="a">
        <div >
       <h1 className="b"> Chatbot Mind Map</h1>
        <span> This is the brain and the memory of the chatbot. You can add, edit and
        analyse <br/> the source data being used to answer user queries from here</span>
        </div>
        <br />

        <div className="c">
          <button className="d">GUIDED TOUR</button>
          <div className="e">
            <button className="f">
              <span>SELECT ORG</span>
              <FaChevronDown />

              <img
                src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/02/15175259/cheeky-cartoon-man-by-novita007-brandcrowd.png"
                alt="User avatar"
                className="ff"
              />
            </button>
          </div>
        </div>
      </div>
      {/* <p className="g">
        This is the brain and the memory of the chatbot. You can add, edit and
        analyse the source data being used to answer user queries from here
      </p> */}
      <div className="h">
        <button className="i" onClick={notify} >+ ADD DATA</button>
        <button className="j" onClick={notify2}>DATA TRAINING STATUS</button>
        <button className="k"onClick={notify3}><MdContentCopy />        GROUND TRUTHS</button>
      </div>

      <div className="l">
        <input type="text" placeholder="Search" className="m" />
        <div className="n">
          <label>Result</label>
          <select className="o">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <button className="p">SEARCH</button>
      </div>

      
    </>
  );
}

export default Top;
