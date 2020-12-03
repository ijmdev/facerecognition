import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f4 black'>
                {'This magic brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form pa4 br5 shadow-5'>
                    <input className='outline f4 pa2 ma2 w-70 center bn' type='text' onChange={onInputChange}/>
                    <button 
                    onClick={onButtonSubmit}
                    className='w-30 grow f4 link ph3 pv2 dib black bg-washed-green bn'>Detect</button>
                </div>
            </div>
        
        </div>
    );
}

export default ImageLinkForm;