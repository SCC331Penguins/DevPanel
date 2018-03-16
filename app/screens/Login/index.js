import React, {Component} from 'react';
import { Segment, Checkbox, Form, Button, Header, Message} from 'semantic-ui-react';
import API from '../../utils/API';
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      stayIn:true,
      message:null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    const { username, password } = this.state;
    API.login(username, password).then(token =>{
      if (!token) {
        throw new Error('Invalid Creds')
      }
      this.context.router.push({pathname: '/Dashboard'})
    }).catch(({message}) => this.setState({error:message}));
  }
  handleChange(e, { name, value }){
    if(name === 'stayIn')
      value = !this.state.stayIn;
    this.setState({ [name]: value });
  }
  render() {
    const {stayIn, username, password, message} = this.state;
    return (
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
        <Segment style={{'flex':0.75}}>
          <Header as="h2">Login</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username:</label>
              <Form.Input name="username" placeholder="Username" value={username} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password:</label>
              <Form.Input name="password" placeholder="Password" value={password} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Stay Signed In" value={stayIn.toString()} defaultChecked name="stayIn" onChange={this.handleChange} />
            </Form.Field>
            <Button type="submit">Submit</Button>
            {(message)?
              <Message negatve>
                <Message.Header>Error</Message.Header>
                <p>{message}</p>
              </Message>
              :null
            }
          </Form>
        </Segment>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
