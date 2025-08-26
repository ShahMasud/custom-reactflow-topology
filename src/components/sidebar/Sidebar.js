// Sidebar.js
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './sidebar.css';

const Sidebar = () => {

  return (
    <div>
      
      <div className="sidebar-content">
        <ul>
          <p >Region</p>
        
          <Form>
                {[{type:'radio', title:"Central"},
                {type:'radio', title:"Western"},
                {type:'radio', title:"Eastern"},
                {type:'radio', title:"All"},
                ].map((data) => (
                  <div key={`default-${data.type}`} className="mb-5">
         

                <Form.Check
                
                  type={data.type}
                  label={data.title}
                  
                />
        </div>
      ))}
    </Form>
        </ul>

        <ul>
          <p>Congestion</p>
         
          <Form>
      {[{type:'checkbox', title:"High"},
      {type:'checkbox', title:"Medium"},
      {type:'checkbox', title:"Low"},
      {type:'checkbox', title:"All"},
    ].map((data) => (
        <div key={`default-${data.type}`} className="mb-3">
         

          <Form.Check
          
            type={data.type}
            label={data.title}
            
          />
        </div>
      ))}
    </Form>
        </ul>
        <Button className='submit_btn' variant="primary">Submit</Button>
      </div>
    </div>
  );
};

export default Sidebar;
