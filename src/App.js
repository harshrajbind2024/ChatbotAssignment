import React from "react";
import Top from "./Component/Top";

import './App.css';

import { MdEdit } from "react-icons/md";

import { MdDelete } from "react-icons/md";

function App() {
  const data = [
    {
      Daate:
        "Do you work on whatsapp? Yes, we do offer our services on WhatsApp!",
      source: "--",
      type: "TEXT",
      created: "8/3/2024",
      text: "Do you work on whatsapp? Yes, we do offer our services on WhatsApp!",
    },
    {
      Daate:
        "I want to test your chatbot Thats great to hear! You can continue chatting with me to test BeyondChats AI responses! I am one of the AIs! 😏 Else, you can also book a demo call with my team: https://calendly.com/beyondchats/15min",
      source: "--",
      type: "TEXT",
      created: "3/28/2024",
      text: "I want to test your chatbot That's great to hear! You can continue chatting with me to test BeyondChats Al responses! I am one of the Als! Else, you can also book a demo call with my team: https://calendly.com/beyondchats/15min",
    },
    {
      Daate:
        "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you well have access to advanced analytics and features that can enhance customer interactions while ensuring data security.",
      source: "--",
      type: "TEXT",
      created: "7/31/2024",
      text: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring",
    },
    {
      Daate:
        "Do you work on whatsapp? Yes, we do offer our services on WhatsApp!",
      source: "--",
      type: "TEXT",
      created: "7/31/2024",
      text: "What is the cost of IVF? I can't provide specific information on IVF costs, but I can tell you about how our chatbot services can enhance your business by generating high-quality leads and providing 24/7 support to your customers.",
    },
    {
      Daate:
        "Do you work on whatsapp? Yes, we do offer our services on WhatsApp!",
      source: "--",
      type: "TEXT",
      created: "7/31/2024",
      text: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring",
    },
  ];


  
   const searchResults=[];


  return (
    <div className="app">
     



      <Top  />

      <div>

        <table>
          <thead>
            <tr className="main">
              <th>Data</th>
              <th>Source</th>
              <th>Type</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.length > 0
              ? searchResults.map((item) => (
                  <tr key={item.created} className="br">
                  <hr/>
                    <td>{item.Daate} </td>
                    <td>{item.source}</td>
                    <td>{item.type}</td>
                    <td>{item.created}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete </button>
                    </td>
                  </tr>
                ))
              : data.map((item) => (
                  <tr key={item.created}>
                    <td>{item.Daate} </td>
                    <td>{item.source}</td>
                    <td>{item.type}</td>
                    <td>{item.created}</td>
                    <td>
                      <MdEdit />

            
                      <MdDelete />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
