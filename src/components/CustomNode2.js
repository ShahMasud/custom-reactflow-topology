import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import Data from './response';
const handleStyle = { left: 10 };

function TextUpdaterNode2({ type, isConnectable }) {
    
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      {/* <Handle type="target" position={Position.Top} isConnectable={isConnectable} />g */}
      {/* <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div> */}
      <div style={{
                    backgroundImage: "url(/community.png)",
                    backgroundColor: "#00000000",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    color: "black",
                    // paddingTop:"30px",
                    fontSize: "12px",
                    border: "transparent",
                    width: "60px",
                    height: "60px",
                    padding: "10px",
                    textAlign:"center",
                    position:"relative"
        }}>
                <p style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>{type}</p>
      </div>
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      /> */}
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode2;
