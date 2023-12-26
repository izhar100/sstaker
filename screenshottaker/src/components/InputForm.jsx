import React, { useState } from 'react';

const InputForm = ({ onCapture }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(url)
        if (url.trim() !== '') {
            onCapture(url);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{display:'flex',justifyContent:'center',gap:'10px'}}>
                <input
                    type="text"
                    placeholder="Enter website URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{padding:"5px",borderRadius:"5px",border:"2px solid blue"}}
                />
                <button style={{padding:"5px",borderRadius:"5px",border:"2px solid blue",backgroundColor:"blue",color:"white",cursor:"pointer"}} type="submit">Capture Screenshots</button>
            </form>
        </div>
    );
};

export default InputForm;
