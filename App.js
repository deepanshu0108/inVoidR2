import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { toStatement } from '@babel/types';

class App extends Component{
  state = {
    selectedFile:null
  }

  fileSelectedHandler = event =>{
  this.setState({
    selectedFile: event.target.files[0]
  })
  }
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('https://drive.google.com/drive/folders/1iStnRfR9vmlfW1NvsY80Umf2AkqfXbhv?usp=sharing', fd, {onUploadProgress: progressEvent =>{
      console.log('Upload Progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
    }})
     .then(res => {
       console.log(res);
     })
  }
  render () {
    return (
      <div className="App">
      <h1> e-KYC</h1>
      <input type="file" class="upload" onChange={this.fileSelectedHandler}/>
      <div class="button">
      <button onClick={this.fileUploadHandler}>Upload File</button>
      </div>
      
      </div>
    );
  }
}

export default App;
