import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game.css'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Role } from './Role.js'

export default class Game extends Component {
  constructor () {
    super()
    this.state = {
      className: "show"
    }
  }

  toggleHidden () {
    this.setState({
      className: ((this.state.className==="show") ? "hide" : "show")
    })
  }

  render() {
    return (
      <div className="Game">
      <Container className="container">
        <Row>
          <Col sm="12" md="12" className="col">
          <button className="btn btn default" class={this.state.className} onClick={this.toggleHidden.bind(this)}>
            <h1>You are naughty</h1>
          </button>
          {!this.state.isHidden && <Role />}
          </Col>
        </Row>
        <Row className="title" id="imageBox">
          <Col sm="12" md="12" className="col">
            <a href="https://fontmeme.com/christmas-fonts/" /><img src="https://valeriesmusings76.files.wordpress.com/2016/11/xmas2.png?w=820" alt="christmas-fonts" border="0" class="image"/>
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col">
            <div className="row">
              <div className="col-4 col-md-4 middle" >
                <ul class="list-group">
                  <li class="list-group-item">Tony</li>
                  <li class="list-group-item">Peter</li>
                  <li class="list-group-item">Steve</li>
                </ul>
              </div>
              <div class="col-4 col-md-4 middle">
                <ul class="list-group">
                  <li class="list-group-item">Nick</li>
                  <li class="list-group-item">Miles</li>
                </ul>
              </div>
              <div class="col-4 col-md-4 middle">
                <ul class="list-group">
                  <li class="list-group-item">Bruce</li>
                  <li class="list-group-item">Clark</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col">
            <h1>Locations</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col">

            <div className="row">
              <div className="col-6 col-md-6 middle" >
                <ul class="list-group">
                  <li class="list-group-item">Central Park</li>
                  <li class="list-group-item">Desert</li>
                  <li class="list-group-item">Antartica</li>
                </ul>
              </div>
              <div class="col-6 col-md-6 middle">
                <ul class="list-group">
                  <li class="list-group-item">Space</li>
                  <li class="list-group-item">Sky</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} className="col">
            <form>
            <p>
              <Link to="/">
                <button className="btn btn-primary" class="secondStart">End Game</button>
              </Link>
              <Link to="/PreparePlayers">
                <button className="btn btn-primary" class="secondStart">Leave Game</button>
              </Link>
            </p>
            </form>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
