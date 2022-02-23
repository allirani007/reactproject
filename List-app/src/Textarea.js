import React,{useState} from "react";
import './App.css';
import TextareAutosize from 'react-textarea-autosize';

function Textarea(){

    const [value,setValue] =useState('sample text');

    const onChangeEvent =(event)=>{
        setValue(event.target.value);
    }
    const onHeightChangeEvent =(height)=>{
      console.log('height',height);
    }
    return(
        <div className="App">
            <h4>Auto resizable Textarea Control</h4>
            <div>
                <TextareAutosize  
                value={value}
                rows={5} maxRows={10}
                onChange={onChangeEvent}
                onHeightChange={onHeightChangeEvent} 
                />
            </div>
            <span className="textborder">{value}</span>
        </div>
    );
}

export default Textarea;