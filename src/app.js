class IndecisionApp extends React.Component {
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
    return <div>Option component here</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component here</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
