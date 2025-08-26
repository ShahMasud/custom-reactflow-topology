import { Handle, Position } from 'reactflow';
function TextUpdaterNode({ type, isConnectable }) {

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
     
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
