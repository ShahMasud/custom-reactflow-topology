import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import Data from './response';
const handleStyle = { left: 10 };

function TextUpdaterNode3({ type, isConnectable }) {
    
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      {/* <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div> */}
      <div style={{
            backgroundImage: "url(/router.svg)",
            backgroundColor: "#00000000",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "black",
            border: "transparent",
            width: "45px",
            height: "45px",
            // position:"absolute"
        }}>
                <p style={{paddingTop:"50px"}}>{type}</p>
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

export default TextUpdaterNode3;
