import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
const client = new W3CWebSocket('ws://localhost:55455');

const LatencyDisplay = () => {
    const [latency, setLatency] = useState(null);

    useEffect(()=>{
        client.onmessage = (event) => {
            setLatency(Date.now() - event.data)
          };
    },[])
    
    return(
        <>
        <div className='LatencyDisplay'>
            {latency}
        </div>
        </>
    )
}

export default LatencyDisplay;