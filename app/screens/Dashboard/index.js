import React, {Component} from 'react';
import CurrentStatus from '../../components/currentStatus';
import Alerts from '../../components/alerts';
import { TopBar } from '../../components/utils';
import Routers from '../Routers';
export default class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.push({pathname: `/${this._input.value}`});
  }

  render() {
    return (<div>
      <TopBar />
      <Alerts />
      <CurrentStatus />
      <Routers />
    </div>);
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
