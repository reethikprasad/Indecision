class IndecisonApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the Hands of a Computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I Do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return <div>Select Options</div>;
  }
}
class AddOptions extends React.Component {
  render() {
    return <div>Add options</div>;
  }
}

ReactDOM.render(<IndecisonApp />, document.getElementById("app"));
