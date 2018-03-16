import React, {Component} from 'react';
import { Segment, Card } from 'semantic-ui-react';

import API from '../utils/API';

export default class CurrentStatus extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
    this.goto = this.goto.bind(this);
  }
  goto(path){
    this.context.router.push({pathname: `/${path}`});
  }
  componentWillMount(){
    this.updateStatus()
  }
  updateStatus(){
    API.getStatus().then(status => this.setState({status}));
  }
  render(){
    return (<Segment style={{width:'73%', display:'inline-block', margin:'1%', float:'right'}}>
      <a className="ui header"style={{display:'block'}}>Components Current Statuses: </a>
      <Card.Group centered className="statusObjects">
        <Card
          image="/assets/img/ph.png"
          header='Photons'
          color="green"
          meta="Online"
          raised
        />
        <Card
          image="/assets/img/ph.png"
          header='Routers'
          color="orange"
          meta="Some Offline"
          raised
          onClick={()=> this.goto('Routers')}
        />
        <Card
          image="/assets/img/ph.png"
          header='Server'
          color="red"
          meta="Offline"
          raised
        />
      </Card.Group>
    </Segment>);
  }
}
