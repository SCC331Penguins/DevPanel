import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon, Image, Segment, Grid } from 'semantic-ui-react';
import moment from 'moment';
import API from '../../utils/API';
// "lastOnline": 0,
// "name": "SCC33102_R11",
// "online": false,
// "warnings": 0
export const RouterSmall = (props)=>
    (
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src="/assets/img/pi.png" />
          <Card.Header>
            {props.router.name}
          </Card.Header>
          <Card.Meta>
            Router
          </Card.Meta>
          <Card.Description>
            <p><Icon disabled name="world" />{(!props.router.online)?'Last ' :null}Online since {moment.unix(props.router.lastOnline).format('DD/MM/YYYY HH:mm')}</p>
            <p><Icon disabled name="exclamation triangle" color="yellow" />{props.router.warnings} Errors/Warnings in last 24h</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic fluid onClick={props.onClick}>More Details</Button>
        </Card.Content>
      </Card>
    );
// RouterSmall.propTypes = {
//   router:{
//     name: PropTypes.string.isRequired,
//   }
// }
export class RouterBig extends Component{
  constructor(props){
    super(props);
    this.state = {
      router:{
        "actuators": [
            [
                "AC:CF:23:28:C2:2C",
                "Lights",
                "[\"allLightsOn\", \"allLightsOff\", \"g1LightsOn\", \"g1LightsOff\", \"g2LightsOn\", \"g2LightsOff\", \"g3LightsOn\", \"g3LightsOff\"]"
            ],
            [
                "CC:D2:9B:F4:41:2E",
                "Kettle",
                "['turnOn','turnOff','set100C','set95C','set80C','set65C','setWarm']"
            ]
        ],
        "lastOnline": 1521112371,
        "name": "SCC33102_R01",
        "online": true,
        "warnings": [
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(174)]",
                "time": 1521105065
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(174)]",
                "time": 1521105075
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(174)]",
                "time": 1521105085
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(174)]",
                "time": 1521105095
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(174)]",
                "time": 1521105200
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521105607
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521105617
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521105627
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521105841
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(179)]",
                "time": 1521106033
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(179)]",
                "time": 1521106037
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(179)]",
                "time": 1521106047
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(179)]",
                "time": 1521106057
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(179)]",
                "time": 1521106067
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(179)]",
                "time": 1521106077
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(179)]",
                "time": 1521106087
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(179)]",
                "time": 1521106097
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106111
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106117
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106127
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106137
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106147
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106157
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106167
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106177
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106180
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106191
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106201
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106211
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106221
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106231
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106241
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106251
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106261
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106269
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106290
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106295
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106306
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106316
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106328
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106356
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106362
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106372
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106381
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106391
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106401
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106411
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106421
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106431
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106441
            },
            {
                "level": 40,
                "msg": "ggg @ [/home/wilson/Projects/SCC331/Pi/pi/mqtt_client.py(178)]",
                "time": 1521106451
            }
        ]
      }
    };
  }
  componentWillMount(){
    var routerID = this.props.location.pathname;
    routerID = routerID.substring(routerID.indexOf('/',5)+1)
    this.setState({routerID})
    // this.state.routerID =
    // API.getRouterStatus('').then(routers => this.setState({routers}));
  }
  doRequest(endpoint){
    fetch('http://localhost:5001/devPanel/Router/SCC33102_R01/'+endpoint+'?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.3mtTvgIG_r3HJCNu4XIIN7n3jbvxc_9bsSVmiiEyNtc')
  }
  render(){
    console.log(this.state);
    return(<Segment style={{width:'98%', display:'inline-block', margin:'1%', float:'right'}}>
      <Card fluid>
        <Card.Content>
          <Image floated="right" size="mini" src="/assets/img/pi.png" />
          <Card.Header>
            {this.state.routerID}
          </Card.Header>
          <Card.Meta>
            Router
          </Card.Meta>
          <Card.Description>
            <p><Icon disabled name="world" />{(!this.state.router.online)?'Last ' :null}Online since {moment.unix(this.state.router.lastOnline).format('DD/MM/YYYY HH:mm')}</p>

            <p><Icon disabled name="linkify" />No. Actuators Found {this.state.router.actuators.length}</p>
          </Card.Description>
        <br />
          <Card.Meta>
            <p><Icon disabled name="exclamation triangle" color="yellow" />{this.state.router.warnings.length} Errors/Warnings in last 24h</p>
          </Card.Meta>
          <Card.Description>
            <Grid celled>
            {this.state.router.warnings.map((warning)=>
              <Grid.Row>
                <Grid.Column width={3}>
                  {warning.level}
                </Grid.Column>
                <Grid.Column width={10}>
                  {warning.msg}
                </Grid.Column>
                <Grid.Column width={3}>
                  {moment.unix(warning.time).format('DD/MM/YYYY HH:mm')}
                </Grid.Column>
              </Grid.Row>
            )}
          </Grid>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui three buttons'>
            <Button basic fluid onClick={() => this.doRequest('Stop')}>Shutdown</Button>
            <Button basic fluid onClick={() => this.doRequest('Restart')}>Restart</Button>
            <Button basic fluid onClick={() => this.doRequest('SleepPhotons')}>Sleep Photons</Button>
          </div>
        </Card.Content>
      </Card>
    </Segment>
    );
  }
}
