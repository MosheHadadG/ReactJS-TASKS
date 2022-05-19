export const Quiz = () => {
  return (
    <div style={{
      width: '600px',
      height: '400px',
      border: '1px solid black'
    }}>
    <QuizTitle />
    <Q1 />
    <Q2 />
    </div>
  )
}

const QuizTitle = () => {
  return (
    <h1>How Do You Like Front End?</h1>
  )
}

//* Q1
const Q1 = () => { 
  return (
    <div style={{
      width: '40%',
      height: '20%'
    }}>
      <Q1Title />
      <Q1Input />

    </div>
  )
}

const Q1Title = () => {
  return (
    <label>How Much you love front end?</label>
  )
  
}

const Q1Input = () => {
  return (
    <input type="range"></input>
  )
}

//* Q2
const Q2 = () => {
  return (
    <div style={{
      width: '60%'
    }}>
      <Q2Title />
      <Q2Input />
    </div>
  )
}

const Q2Title = () => {
  return (
    <div>
      <label>What is your favorite front end feature/topic?</label>
    </div>
  )
}

const Q2Input = () => {
  return (
    <input type="text"></input>
  )
}




export default Quiz;