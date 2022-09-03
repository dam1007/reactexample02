import './App.css';
import Container from './Container';
import MyHeader from './MyHeader';
import Counter from './Counter';
import MyFooter from './MyFooter';

function App() {

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };


  return (
    <Container>
      <div className="App">
        <MyHeader />
        <Counter /* a={1} b={2} c={3} d={4} e={5} */ {...counterProps} />
        <MyFooter />
      </div>
    </Container>
  );
}

export default App;
