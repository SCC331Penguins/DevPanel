import React, {Component} from 'react';
import { Segment, Card } from 'semantic-ui-react';
import { WarningList } from './utils';
import API from '../utils/API';

export default class CurrentStatus extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentWillMount(){
    this.updateStatus()
  }
  updateStatus(){
    API.getStatus().then(status => this.setState({status, loading:false }));
  }
  render(){
    return (<Segment style={{width:'23%', display:'inline-block', margin:'1%'}}>
      <a className="ui header">Warnings: </a>
      <WarningList warnings={[
        { type:'Error',text:'an Error has occured',time:''},
        { type:'Warning',text:'an Error has occured',time:''},
        { type:'Error',text:'an Error has occured',time:''},
        { type:'Error',text:'an Error has occured',time:''},
        { type:'Warning',text:'an Error has occured',time:''},
        { type:'Warning',text:'an Error has occured',time:''},
      ]} />
    </Segment>);
  }
}
