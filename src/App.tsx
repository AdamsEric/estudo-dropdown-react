import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown id='teste-dropdown'>
        <Dropdown.Toggle id='teste-dropdown'>
          Teste
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => console.log('click')}>
            Teste
          </Dropdown.Item>

          <Dropdown.Item onClick={() => console.log('click')}>
            Teste
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id='teste-dropdown'>
        <Dropdown.Toggle id='teste-dropdown'>
          Teste
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => console.log('click')}>
            Teste
          </Dropdown.Item>

          <Dropdown.Item onClick={() => console.log('click')}>
            Teste
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default App;
