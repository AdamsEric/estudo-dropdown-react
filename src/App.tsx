import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown id='teste-dropdown'>
        <Dropdown.Item onClick={() => console.log('click')}>
          Teste
        </Dropdown.Item>

        <Dropdown.Item onClick={() => console.log('click')}>
          Teste
        </Dropdown.Item>
      </Dropdown>

      <Dropdown id='teste-dropdown-2'>
        <Dropdown.Item onClick={() => console.log('click')}>
          Teste
        </Dropdown.Item>

        <Dropdown.Item onClick={() => console.log('click')}>
          Teste
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default App;
