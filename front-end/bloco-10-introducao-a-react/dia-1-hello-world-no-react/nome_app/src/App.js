import React from 'react';
import catImage from './catImage.jpg'
import './App.css';
// const array = [ 'caminhar', 'correr', 'nadar', 'viajar', 'estudar']

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// const List = (array) => {
//   return (
//     <ol id='list'>{array.map((toDo) => Task(toDo))}</ol>
//   );
// }



class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

const App = () => {
  return (
    // List(array)
    <Image source={catImage} alternativeText='isso é uma batata'/>
  );
}

export default App;
