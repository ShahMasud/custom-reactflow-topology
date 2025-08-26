import React, {useState} from "react";
import Sidebar from "./sidebar/Sidebar";
import { IoIosMenu } from 'react-icons/io';
import { IoCloseSharp } from "react-icons/io5";
import 'reactflow/dist/style.css';
import { useCallback, useMemo } from 'react';
import TextUpdaterNode from "./CustomNode";
import TextUpdaterNode2 from "./CustomNode2";
import TextUpdaterNode3 from "./CustomNode3";

import ReactFlow, {
  applyNodeChanges,
  addEdge,  
} from 'reactflow';

import Data from "./response";
const initialNodes = Data.node_list


const initialEdges = Data.edges_list

const Flow = ()=>{
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  
const nodeTypes = useMemo(() => ({ 
  router: TextUpdaterNode3,
   interface: TextUpdaterNode,
   community: TextUpdaterNode2,
  }), []);

  

  const createEdgesRecursively = (nodeId,nodeType, initiatorNodeType, visitedNodes) => {
    if (visitedNodes.has(nodeId)) {
      // If the node has already been visited, stop recursion
      return;
    }
    
    // Mark the current node as visited
    visitedNodes.add(nodeId);

    // Find all edges that are related to the given nodeId
    let relatedEdges;
    if(initiatorNodeType==="router"){
      relatedEdges = Data.edges_list.filter(
        (edge) => {
          let inBetween= "";
          if(nodeType==="router" ){
            inBetween="router-interface"
  
          } else if(nodeType==="interface"){
            inBetween="interface-community"
          }
          return (edge.source === nodeId || edge.target === nodeId) && (edge.in_between===inBetween)
        
        }
      );
    } 
    else if(initiatorNodeType==="interface"){
      relatedEdges = Data.edges_list.filter(
        (edge) => {
          
          let inBetweenLeft= "";
          let inBetweenRight="";
         if(nodeType==="interface"){
            inBetweenLeft="interface-community"
            inBetweenRight="router-interface"

         }
          return (edge.source === nodeId || edge.target === nodeId) && (edge.in_between===inBetweenLeft || edge.in_between===inBetweenRight )
        
        }
      );} else if(initiatorNodeType==="community"){
        relatedEdges = Data.edges_list.filter(
          (edge) => {
            let inBetween= "";
            if(nodeType==="community" ){
              inBetween="interface-community"
    
            } else if(nodeType==="interface"){
              inBetween="router-interface"
            }
            return (edge.source === nodeId || edge.target === nodeId) && (edge.in_between===inBetween)
          
          }
        );
      }


    // Find the target nodes of the related edges
    const filteredNodes = relatedEdges.map((edge) =>
      edge.source === nodeId ?  {node_id: edge.target, node_type: edge.target_type}:{node_id: edge.source, node_type: edge.source_type}
    );

    // Recursively create edges for the target nodes
    filteredNodes.forEach((node) => {
      createEdgesRecursively(node.node_id, node.node_type, initiatorNodeType, visitedNodes);
    });

    // Add the new edges to the existing edges
    setEdges((prevEdges) => [...prevEdges,
      ...relatedEdges
    ]);
  };


  const onNodeClick = (event, node) => {
    // Clear existing edges
    setEdges([]);

    // Create edges recursively for the clicked node and its related nodes
    const visitedNodes = new Set();
    createEdgesRecursively(node.id, node.type, node.type ,visitedNodes);
  };



    return (
       <>
         <div style={{textAlign:"center", background:"#4092d9ff", color:"white", padding:"10px"}}>
         <h3 style={{margin:"0px"}}>Explore Network Connections</h3>
      <p style={{margin:"0px"}}>Click any router, interface, or community to highlight its direct connections.</p>
       </div>
        <div className="flow-div">
      
      <div>
        <button onClick={toggleSidebar} 
        className="toggle-button"
        >
        {isSidebarOpen? <IoCloseSharp size={30} color="white" />:  <IoIosMenu size={30} color="white" />}
        </button>
        {isSidebarOpen? <Sidebar />: ""}
      </div>
      
      <p style={{position:"absolute", zIndex:"1", fontSize:"12px", top:"27%", left:"40%", transform:"translate(-50%, -50%)"}}>WESTERN</p>
      <p style={{position:"absolute", zIndex:"1", fontSize:"12px", top:"27%", left:"60%", transform:"translate(-50%, -50%)"}}>EASTERN</p>
      <p style={{position:"absolute", zIndex:"1", fontSize:"12px", top:"67%", left:"50%", transform:"translate(-50%, -50%)"}}>CENTRAL</p>

       <ReactFlow
        className="react_flow"
        nodes={nodes} 
        edges={edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        elementsSelectable={false}
        nodesDraggable={false}
        zoomOnDoubleClick={false}
        fitView
        zoomOnScroll={false}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        > 
    </ReactFlow>
     </div>
       </>
     
     
      );

}
export default Flow
