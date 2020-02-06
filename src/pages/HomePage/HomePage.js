import React, { Component } from 'react';
import '../../index.css';
import '../../index.js';
import '../../App.css';
import Header from '../../sharedComponents/Header/header';
import Footer from '../../sharedComponents/Footer/footer';


export default class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
     
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
       <div class="title-div">
       <h2 id="blink2">Keeping London moving - Transport for London</h2>
       
       </div>

       <div className="about-task">
       <h2>About</h2>
       <div id="about-container">
       <div className="about-me">
       <h2>Обо мне</h2>
       <p>Являюсь студентом 3-его курса БГТУ, факультета информационных технологий. Front-end'ом начал активно увлекаться около года назад. Также проходил стажеровку в этом же направлении в компании leverX. Но сам реакт начал учить чуть ли не за пару дней до того, как взялся за это задание. По своим ощущениям могу сказать, что мне очень нравится данная технология и я хотел бы продолжать ее изучение!</p>
       </div>
       
       <div className="about-api">
       <h2>Впечатления о задании</h2>
       <p>Задание очень понравилось тем, что действительно мотивировало подучить реакт. А это именно то, что я хотел. Так как очень долгое время откладывал это на потом. Благодаря ему я научился многим базовым вещам, это было действительно полезной практикой. Не зависимо от ответа, могу с точностью сказать, что время потраченное на его выполнение, было потрачено не зря!</p>
       </div>
       </div>
       </div>
        <Footer />
      </div>
    );
  }
}

