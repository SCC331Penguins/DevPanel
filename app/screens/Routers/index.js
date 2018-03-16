import React, {Component} from 'react';
import { Segment, Card} from 'semantic-ui-react';
import { RouterSmall } from './individual';
import API from '../../utils/API';
export default class Routers extends Component {
  constructor(props){
    super(props);
    this.state = {
      routers:[{
            "lastOnline": 1521111260,
            "name": "SCC33102_R01",
            "online": true,
            "warnings": 249
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R02",
            "online": false,
            "warnings": 0
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R03",
            "online": false,
            "warnings": 0
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R04",
            "online": false,
            "warnings": 0
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R06",
            "online": false,
            "warnings": 0
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R07",
            "online": false,
            "warnings": 0
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R08",
            "online": false,
            "warnings": 0
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R09",
            "online": false,
            "warnings": 0
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R10",
            "online": false,
            "warnings": 0
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R11",
            "online": false,
            "warnings": 0
        },
        {
            "lastOnline": 0,
            "name": "SCC33102_R12",
            "online": false,
            "warnings": 0
        }]
    };
  }
  componentDidMount(){
    API.getAllRouterStatus().then(routers => this.setState({routers}));
  }
  render() {
    const { routers } = this.state;
    return (
        <Segment style={{'flex':0.75, margin:'1%'}} loading={this.state.routers === null}>
          <a className="ui header"style={{display:'block'}}>Routers: </a>
          <Card.Group centered>
          {routers.map((router, index)=>
            <RouterSmall key={index} router={router} onClick={()=> this.context.router.push({pathname: `/Router/${router.name}`})} />
          )}
          </Card.Group>
        </Segment>
    );
  }
}

Routers.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
