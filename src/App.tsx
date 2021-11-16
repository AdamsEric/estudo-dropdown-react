import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown id='teste-dropdown'>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => console.log('click')}>
            Teste
          </Dropdown.Item>

          <Dropdown.Item onClick={() => console.log('click')}>
            Teste
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id='teste-dropdown-2'>
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
