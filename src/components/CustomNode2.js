import { Handle, Position } from 'reactflow';

function TextUpdaterNode2({ type, isConnectable }) {

  return (
    <div className="text-updater-node">
     
      <div style={{
                    backgroundImage: "url(/community.png)",
                    backgroundColor: "#00000000",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    color: "black",
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
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode2;
