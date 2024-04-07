import './App.css';

export default function App() {
  const handleInputBlur = event => {
    console.log('Input lost focus');
  };

  const handleDivBlur = event => {
    console.log('Div lost focus');
  };

  return (
    <div>
      <div tabIndex={0} onBlur={handleDivBlur}>
        Hello world
      </div>

      <input onBlur={handleInputBlur} />
    </div>
  );
}
