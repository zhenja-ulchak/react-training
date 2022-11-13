import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}
   {/*  quest={quest} пропси */}
function Game({step, quest, onclickVariant}) {

  // Math.floor(Math.random() * 100) + 1;

let addpx = Math.round( step /  questions.length *100 );
console.log(step);


  return (
    <>
      <div className="progress">
        <div style={{ width: `${addpx}%` }} className="progress__inner"></div>
      </div>
      {/* рендерим з пропса {quest.title} */}
      <h1> {quest.title}</h1>
      <ul>
       {
        // передаєм в мап стрелочну функцію в неї в кладуєм значення і виводим в лі
          quest.variants.map((text, index)=>(
            //в функуію онклік передаєм індекс
            <li onClick={()=> onclickVariant(index)} key={text}>{text}</li>
          ))
          }
  
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = new React.useState(0);
  const quest = questions[step]; //із масива питань ми вибераєм по индексу step
  const [correct, setCorrect] = new React.useState(0);


 const onclickVariant = (index)=>{

  setStep(step + 1);
  if (index == quest.correct) {
    setCorrect(correct + 1)
  }

 }
  return (
    <div className="App">
      {/*  quest={quest} пропси */}
      {
        step !== questions.length ? (<Game step={step} quest={quest} onclickVariant={onclickVariant} />)
         :
         ( <Result correct={correct} /> )
      }

    </div>
  );
}

export default App;
