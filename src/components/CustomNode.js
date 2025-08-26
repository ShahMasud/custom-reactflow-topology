import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import Data from './response';
const handleStyle = { left: 10 };

function TextUpdaterNode({ type, isConnectable }) {
    // console.log(data);
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      
      <div style={{
            backgroundColor: "#A3D6F0",
            opacity: "50%",
            color: "#0D6C94",
            fontWeight: 800,
            fontSize: "14px",
            border: "transparent",
            borderRadius: "30%",
            width: "160px",
            padding: "20px",
            textAlign:"center",

            }}>
                {type}
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

export default TextUpdaterNode;
