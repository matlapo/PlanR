import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import Modal from 'react-awesome-modal';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import { Steps, Button as AntButton, message } from 'antd';
import 'antd/dist/antd.css';

const Step = Steps.Step;

const steps = [{
  title: 'First',
  content:
    () => { 
      <fieldset> 
        <Row>
          <Col xs="8" sm="8" md="8" lg="8">
            <label className="inputName">Name 1</label>
            <Input placeholder="What will it be called?" />
          </Col>
        </Row>
        <Row>
          <Col xs="8" sm="8" md="8" lg="8">
            <label className="inputName">Email</label>
            <Input placeholder="Your email" />
          </Col>
        </Row>
        <Row>
          <Col xs="8" sm="8" md="8" lg="8">
            <label className="inputName">Ho ho</label>
            <Input placeholder="Jay will be mad af" />
          </Col>
        </Row>
      </fieldset> },
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      modal : false,
      modal2: false,
      display : 0,
      step: 0,
    }

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

   toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  next() {
    this.setState({
      display: this.state.display + 1
    });
  }

  previous() {
    this.setState({
      display: this.state.display - 1
    });
  }

  nextStep() {
    const step = this.state.step + 1;
    this.setState({ step });
  }

  prevStep() {
    const step = this.state.step - 1;
    this.setState({ step });
  }


  render() {

    let wizardContent;
    if (this.state.step == 0) {
      wizardContent = 
        <fieldset> 
          <Row>
            <Col xs="8" sm="8" md="8" lg="8">
              <label className="inputName">Name</label>
              <Input placeholder="What will it be called?" />
            </Col>
          </Row>
          <Row>
            <Col xs="8" sm="8" md="8" lg="8">
              <label className="inputName">Email</label>
              <Input placeholder="Your email" />
            </Col>
          </Row>
          <Row>
            <Col xs="8" sm="8" md="8" lg="8">
              <label className="inputName">Ho ho</label>
              <Input placeholder="Jay will be mad af" />
            </Col>
          </Row>
        </fieldset>;
    }
    else if (this.state.step == 1) {
      wizardContent = 
        <fieldset> 
          <Row>
            <Col xs="8" sm="8" md="8" lg="8">
              <label className="inputName">Name 1</label>
              <Input placeholder="What will it be called?" />
            </Col>
          </Row>
          <Row>
            <Col xs="8" sm="8" md="8" lg="8">
              <label className="inputName">Email 1</label>
              <Input placeholder="Your email" />
            </Col>
          </Row>
          <Row>
            <Col xs="8" sm="8" md="8" lg="8">
              <label className="inputName">Ho ho 1</label>
              <Input placeholder="Jay will be mad af" />
            </Col>
          </Row>
        </fieldset>;
    }  else {
        wizardContent = 
        <fieldset> 
          <Row>
            <Col xs="8" sm="8" md="8" lg="8">
              <label className="inputName">Name 2</label>
              <Input placeholder="What will it be called?" />
            </Col>
          </Row>
          <Row>
            <Col xs="8" sm="8" md="8" lg="8">
              <label className="inputName">Email 2</label>
              <Input placeholder="Your email" />
            </Col>
          </Row>
          <Row>
            <Col xs="8" sm="8" md="8" lg="8">
              <label className="inputName">Ho ho 2</label>
              <Input placeholder="Jay will be mad af" />
            </Col>
          </Row>
        </fieldset>;
    }

    return (

    <div>
      <div class="welcome d-flex justify-content-center flex-column">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark pt-4 px-0">
            <a class="navbar-brand" href="#">
              Umba
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">My profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Log Out</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="inner-wrapper mt-auto mb-auto container">
          <div class="row">
            <div class="col-md-7">
                <h1 class="welcome-heading display-4 text-white">Let's move.</h1>
                <button href="#our-services" class="btn btn-lg btn-outline-white btn-pill align-self-center">Get started</button>
            </div>
          </div>
        </div>
      </div>

      <div id="our-services" class="our-services section py-4">
        <h3 class="section-title text-center my-5">Your schedule</h3>


      <div class="container py-4">
          <div class="row justify-content-md-center px-4">
            <div class="contact-form col-sm-12 col-md-12 col-lg-12 p-4 mb-4 card"> 
              <div className="calendar" style={{height: '700px', width: '100%', paddingTop: '5%'}}>
              <BigCalendar
                  selectable={true}
                  min={new Date('2018, 1, 7, 09:00')}
                  max={new Date('2018, 1, 7, 18:00')}
                  defaultView='week'
                  onSelectEvent={event => alert(event.title)}
                onSelectSlot={() => this.toggle()}
                events={[{
                    'title': 'Woohoo2',
                    'allDay': false,
                    'start': moment().add(22, "hours").toDate(),
                    'end': moment().add(23, "hours").toDate()
                  }
                  ]}
                  startAccessor='start'
                  endAccessor='end'
              />
              <div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody>
                    <h2> New Event </h2>
                    <Form>

                    <Row>
                      <Col xs="12" sm="12" md="12" lg="12">
                        <Steps current={this.state.step}>
                          {steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">
                          {wizardContent}
                        </div>
                        <div className="steps-action">
                          {
                            this.state.step < steps.length - 1
                            && <Button onClick={() => this.nextStep()}>Next</Button>
                          }
                          {
                            this.state.step === steps.length - 1
                            && <Button onClick={() => message.success('Processing complete!')}>Done</Button>
                          }
                          {
                            this.state.step > 0
                            && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prevStep()}>
                              Previous
                            </Button>
                            )
                          }
                        </div>
                      </Col>
                    </Row>



                      {/* <fieldset className={ "fadeout " + (this.state.display == 0 ? "active" : "") }> 
                        <Row>
                          <Col xs="8" sm="8" md="8" lg="8">
                            <label className="inputName">Name 1</label>
                            <Input placeholder="What will it be called?" />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="8" sm="8" md="8" lg="8">
                            <label className="inputName">Email</label>
                            <Input placeholder="Your email" />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="8" sm="8" md="8" lg="8">
                            <label className="inputName">Ho ho</label>
                            <Input placeholder="Jay will be mad af" />
                          </Col>
                        </Row>
                      </fieldset>
                      <fieldset  className={ "fadeout " + (this.state.display == 1 ? "active" : "") }> 
                        <Row>
                          <Col xs="8" sm="8" md="8" lg="8">
                            <label className="inputName">Name</label>
                            <Input placeholder="What will it be called?" />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="8" sm="8" md="8" lg="8">
                            <label className="inputName">Email</label>
                            <Input placeholder="Your email" />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="8" sm="8" md="8" lg="8">
                            <label className="inputName">Ho ho</label>
                            <Input placeholder="Jay will be mad af" />
                          </Col>
                        </Row>
                      </fieldset> */}
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    {/* <Row>
                      <Col>
                        <Button className="btn btn-secondary" onClick={this.previous}>Previous</Button>
                        <Button className="btn btn-success" Style="width: 93px" onClick={this.next}>Next</Button>
                      </Col>
                    </Row> */}
                  </ModalFooter>
                </Modal>

                <Button className="btn btn-primary" onClick={this.toggle2}>Open modal</Button>

                <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                <ModalHeader toggle={this.toggle2}>New Event</ModalHeader>
                  <ModalBody>
                   <form>
                   <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                      <i className="fa fa-check-circle icon-pass cycle-status" style={{fontSize: '21px', color: '#28A745', paddingRight: '1%'}}></i>
                      <label className="inputName" style={{fontSize: '21px'}}>Zumba</label>
                      <ul style={{fontSize: '15px'}}>
                        <li><span>Instructor:</span> <span>Leyla Kinaze</span></li>
                        <li><span>Type of event:</span> <span>recurrent</span></li>
                        <li><span>Time & date:</span> <span>every Monday at 11h45AM</span></li>
                        <li><span>Location:</span> <span>Ericsson gym</span></li>
                      </ul> 
                      <hr/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                      <i className="fa fa-check-circle icon-pass cycle-status" style={{fontSize: '21px', color: '#28A745', paddingRight: '1%'}}></i>
                      <label className="inputName" style={{fontSize: '21px'}}>Cinema</label>
                      <ul style={{fontSize: '15px'}}>
                        <li><span>Instructor:</span> <span>Jay Abi-Saad</span></li>
                        <li><span>Type of event:</span> <span>recurrent</span></li>
                        <li><span>Time & date:</span> <span>every Thursday at 5h00PM</span></li>
                        <li><span>Location:</span> <span>Ericsson conference room</span></li>
                      </ul> 
                      <hr/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                      <i className="fa fa-check-circle icon-pass cycle-status" style={{fontSize: '21px', color: '#28A745', paddingRight: '1%'}}></i>
                      <label className="inputName" style={{fontSize: '21px'}}>Hackathon</label>
                      <ul style={{fontSize: '15px'}}>
                        <li><span>Instructor:</span> <span>Mathieu Lapointe</span></li>
                        <li><span>Type of event:</span> <span>one time</span></li>
                        <li><span>Time & date:</span> <span>Wednesday at 4h45PM</span></li>
                        <li><span>Location:</span> <span>Ericsson garage</span></li>
                      </ul> 
                      <hr/>
                    </Col>
                  </Row>
                  </form>
                  </ModalBody>
                  <ModalFooter>
                  <button type="button" class="btn btn-outline-success pull-right" align="right">Register</button>
                  </ModalFooter>
                </Modal>



            </div>
        </div>


            </div>
          </div>
        </div>

      </div>

      {/*<div class="contact section-invert py-4">
        <h3 class="section-title text-center m-5">Contact Us</h3>
        <div class="container py-4">
          <div class="row justify-content-md-center px-4">
            <div class="contact-form col-sm-12 col-md-10 col-lg-7 p-4 mb-4 card">
              <form>
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                      <label for="contactFormFullName">Full Name</label>
                      <input type="email" class="form-control" id="contactFormFullName" placeholder="Enter your full name" />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                      <label for="contactFormEmail">Email address</label>
                      <input type="email" class="form-control" id="contactFormEmail" placeholder="Enter your email address" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                        <label for="exampleInputMessage1">Message</label>
                        <textarea id="exampleInputMessage1" class="form-control mb-4" rows="10" placeholder="Enter your message..." name="message"></textarea>
                    </div>
                  </div>
                </div>
                <input class="btn btn-primary btn-pill d-flex ml-auto mr-auto" type="submit" value="Send Your Message" />
              </form>
            </div>
          </div>
        </div>
      </div>*/}

      <footer>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">Ericsson</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Our Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">My profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </footer>

    </div>
    );
  }
}

{/* <form style={{paddingRight: '4%',  paddingTop: '5%'}}>
                              <Form.TextArea
                              onChange={(e) => this.setState({text: e.target.value})}
                              value={this.state.text} placeholder="What are you planning?" style={{maxHeight: '160pt', minHeight: '160pt', resize: 'none'}}/>
                          </form> */}

export default App;



// <label class="inputName">Location</label>
// <div class="ui input" style={{paddingBottom: '5%', paddingTop: '5%', width: '100%'}}>
//   <input type="text" placeholder="Where is it taking place?" />
// </div><br/>

// <label class="inputName">Capacity</label>
// <div class="ui input" style={{ paddingTop: '5%', width: '100%'}}>
//   <input type="text" placeholder="How many attendees?" />
// </div>
// </div>
// <div class="col-lg-12">
// <label class="inputName">Description</label>
// </div>
// {/*<a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>*/}


// <Modal 
// visible={this.state.visible}
// width="35%"
// height="35%"
// effect="fadeInUp"
// onClickAway={() => this.closeModal()}>
// <h1 style={{paddingTop: '4%', paddingLeft: '4%',  paddingBottom: '2%', fontSize: '30pt'}}>New Event</h1>
// <div className="row">
//     <div class="col-lg-12 col-md-12">
//       <label class="inputName">Name</label>
//       <input type="text" placeholder="What will it be called?" />
//     </div>
// </div>
// </Modal>