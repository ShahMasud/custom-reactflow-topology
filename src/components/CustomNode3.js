import { Handle, Position } from 'reactflow';

function TextUpdaterNode3({ type, isConnectable }) {

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
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
        }}>
                <p style={{paddingTop:"50px"}}>{type}</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode3;
