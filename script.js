class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	email: ""
    }
  }
  
  render() {
    return (
      <div>
        <h1>Inregistrare</h1>
        <label htmlFor="name">Nume:</label>
        <input className="input" type="name" name="name" value="" placeholder="Nume"></input><br></br>
        <label htmlFor="name">Email:</label>
        <input className="input" type="email" name="email" value="" placeholder="Email" /><br></br>
        <label htmlFor="name">Parola:</label>
        <input className="input" type="password" name="parola" value="" placeholder="Parola"/><br></br>
        <button className="inputbutton" type="submit" onclick="SendAlert()">Trimite</button>
      </div>
    )
  }
}

ReactDOM.render(<RegisterForm />, document.querySelector("#RegisterForm"))
