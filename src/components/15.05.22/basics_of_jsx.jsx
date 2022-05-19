const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const sum = number1 + number2;
const string = "I love React!"

const HelloWorld = () => {
  return (
    <div>
      <h1>{`${data[0]} ${data[1]}`}</h1>
      <h1>{`${number1} + ${number2} = ${sum}`}</h1>
      <h1>{`The string's length is ${string.length}`}</h1>
    </div>
  );
};
export default HelloWorld;