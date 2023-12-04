import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUppercaseClicked = () => {        
        setText(text.toUpperCase());
    }
    const handleLowercaseClicked = () => {        
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);        
    }

    const [text, setText] = useState('Enter text here');

    // setText('Enter Text Here');
  return (
     <>
        <div className='container'>
            <div className="row">
                <div className='col-md-12'>                    
                    <h1>{props.heading}</h1>
                    <div className='mb-3'>
                    <textarea value={text} onChange={handleOnChange}  className="form-control" id="myBox" rows="8"></textarea>
                    </div>
                    <button onClick={handleUppercaseClicked} className="btn btn-primary">Convert To Uppercase</button>
                    &nbsp;
                    <button onClick={handleLowercaseClicked} className="btn btn-primary">Convert To Lowercase</button>
                </div>
            </div>
            <div className="row">
                <div className='col-md-12'>
                    <h1>Your text Summary</h1>
                    <p>
                        {text.split(" ").length} words, {text.length} characters
                    </p>
                    <p>{0.008 * text.split(" ").length} minutes to read</p>

                    <h2>Preview</h2>
                    <p>
                        {text}
                    </p>
                </div>
            </div>            
        </div>        
    </>
  )
}
