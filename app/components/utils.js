import React, {Component} from 'react';
import { Comment, Icon } from 'semantic-ui-react';

export const WarningList = (props)=>
  <Comment.Group>
    {props.warnings.map((warning, index)=>
      <Comment key={index}>
        <Comment.Content>
          <Comment.Author as='a'>{warning.type ==='Error'? <Error /> :<Warning /> }</Comment.Author>
          <Comment.Metadata>
            <div>{warning.time}</div>
          </Comment.Metadata>
          <Comment.Text>{warning.text}</Comment.Text>
        </Comment.Content>
      </Comment>
    )}
  </Comment.Group>

const style = {display: 'inline',fontSize: 20};
export const Error = (props)=>
  <Icon name='exclamation triangle' color='red' style={style}> Error</Icon>

export const Warning = (props)=>
  <Icon name='exclamation triangle' color='yellow' style={style}> Warning</Icon>

  export const TopBar = (props)=>
    <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="">
            The SET DevPanel
          </a>
        </div>
        <p className="navbar-text navbar-right" style={{marginRight:0}}>Signed in as <a href="" className="navbar-link">Admin</a></p>
      </div>
    </nav>
