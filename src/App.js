import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import React from 'react'
import { Button, Form , Col, Row, InputGroup, FormControl, ListGroup} from 'react-bootstrap';

const defaultCards =
  [
    {
      "Jkey": "DBPB-80",
      "Jurl": "https://jira.sandstone.com.au/browse/DBPB-80",
      "Jsummary": "Sprint Meetings - Daily Standup",
      "comment": "Atlas Daily Standup",
      "estimate": 15,
      "isRecurring": true
    },
    {
      "Jkey": "DBPB-80",
      "Jurl": "https://jira.sandstone.com.au/browse/DBPB-80",
      "Jsummary": "Sprint Meetings - Iteration Planning",
      "comment": "Atlas Iteration Planning",
      "estimate": 15,
      "isRecurring": true
    },
    {
      "Jkey": "DBPB-80",
      "Jurl": "https://jira.sandstone.com.au/browse/DBPB-80",
      "Jsummary": "Sprint Meetings - Iteration Retro",
      "comment": "Atlas Iteration Retro",
      "estimate": 30,
      "isRecurring": true
    },
    {
      "Jkey": "DBPB-80",
      "Jurl": "https://jira.sandstone.com.au/browse/DBPB-80",
      "Jsummary": "Sprint Meetings - Grooming",
      "comment": "Atlas Grooming",
      "estimate": 60,
      "isRecurring": true
    },
    {
      "Jkey": "DBPB-79",
      "Jurl": "https://jira.sandstone.com.au/browse/DBPB-79",
      "Jsummary": "General Meetings - FY 21",
      "estimate": 30,
      "isRecurring": true
    },
    {
      "Jkey": "DBPB-96",
      "Jurl": "https://jira.sandstone.com.au/browse/DBPB-96",
      "Jsummary": "SoS meetings - FY 21",
      "comment": "Scrum of Scrums meeting",
      "estimate": 60,
      "isRecurring": true
    },
    {
      "Jkey": "DBPB-1795",
      "Jurl": "https://jira.sandstone.com.au/browse/DBPB-1795",
      "Jsummary": "Scrum Master Activities - FY 21",
      "estimate": 60,
      "isRecurring": true
    }
  ];

function App() {
  const [cards, setCards] = useState([]);
  const [submitTime, setSubmitTime] = useState(0);
  const [history, setHistory] = useState([]);

  const CardList = props => (
    <div>
      {props.profiles.map(profile => <Card key={profile.Jsummary} {...profile}/>)}
    </div>
  );

  const Card = props => (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
            <Form.Row>
               <Form.Label column sm="3"><a href={props.Jurl} target="_blank" rel="noreferrer">{props.Jkey}-{props.Jsummary}</a></Form.Label>
               <Col sm="2">
                <InputGroup className="mb-2">
                  <FormControl id="timelog" type="number" defaultValue={props.estimate} required />
                  <InputGroup.Append>
                    <InputGroup.Text>mins</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col sm="2">
                <FormControl id="workcomment" type="text" placeholder="Comment" defaultValue={props.comment}/>
              </Col>
              <Col sm="1">
                <Button variant="info" type="submit">Log time</Button>
              </Col>
              <FormControl id="Jkey" type="hidden" value={props.Jkey}/>
              <FormControl id="Jsummary" type="hidden" value={props.Jsummary}/>
            {props.isRecurring ? null : <Col sm="1"><Button type="Button" variant="danger" onClick={deleteCard}>Remove</Button></Col>}
            </Form.Row>
        </Form>
        <br/>
      </div>
    </>
  );

  const LogHistory = props => (
    <ListGroup>
      {props.logitems.map(item => <LogItem key={item.Jkey} {...item}/>)}
    </ListGroup>
  );

  const LogItem = props => (
    <ListGroup.Item>{props.Jkey} - {props.Jsummary} --- {props.timeLogged}</ListGroup.Item>
  );

  async function fetchFilter(filter) {
    const apiUrl = 'https://localhost/jira/search?jql=filter%3D'+filter;
    const resp = await axios.get(apiUrl);
    const issueList = [];
    resp.data.issues.map(issue => {
      let card = {
        "Jkey": issue.key,
        "Jurl": "https://jira.sandstone.com.au/browse/"+issue.key,
        "Jsummary": issue.fields.summary
      };
      issueList.push(card)
    });
    // console.log(issueList);
    return issueList;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = `https://localhost/jira/issue/${event.target.Jkey.value}/worklog`;
    const worklog = BuildWorkLog(event);
    const resp = await axios.post(apiUrl, worklog);
    const logEntry = {
      "Jkey": event.target.Jkey.value,
      "Jsummary": event.target.Jsummary.value,
      "timeLogged": event.target.timelog.value+" minutes"
    };
    history.push(logEntry)
    setSubmitTime(Number(submitTime) + Number(event.target.timelog.value));
    setHistory(history);
  };

  async function fetchTicket(key) {
    const apiUrl = `https://localhost/jira/issue/${key}`;
    const resp = await axios.get(apiUrl);
    console.log(resp);
    const newCard = {
      "Jkey": key,
      "Jsummary": resp.data.fields.summary,
      "Jurl": "https://jira.sandstone.com.au/browse/"+key
    }
    console.log(newCard);
    var newCards = [];
    newCards.push(newCard);
    console.log(newCards);
    return newCards.concat(cards);
  }

  const addCard = (event) => {
    event.preventDefault();
    fetchTicket(event.target.addTicket.value).then(result => {
      setCards(result);
    });
  }

  const deleteCard = (event) => {
    event.preventDefault();
    console.log(event);
    let newCards = cards.filter(c => c.Jkey !== event.target.parentNode.parentNode.childNodes[4].value);
    setCards(newCards);
  }

  const clearLog = (event) => {
    event.preventDefault();
    setHistory([]);
    setSubmitTime(0);
  }

  const LoggedTime = props => (
    <>
      <Row>
        <Col sm="5"><h1 class="page-header">Total time logged --- {submitTime} / 450 minutes</h1></Col> <Button onClick={clearLog}>Clear Log</Button>
      </Row>
    </>
  );

  const loadFilter = (event) => {
    event.preventDefault();
    fetchFilter(event.target.loadFilter.value).then(result => {
      setCards(result);
      })
  }

  return (
    <>
      <LoggedTime />
      <h2>Recurring Tasks</h2>
      <CardList profiles={defaultCards} />
      <h2>Filtered Tasks</h2>
      <Form.Row>
      <Col sm="3" >
      <Form onSubmit={addCard}>
        <Form.Group controlId="addTicket">
          <Form.Control type="string" placeholder="Jira Ticket" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add ticket
        </Button>
      </Form>
      </Col>
      <Col sm="0.5" > OR </Col>
      <Col sm="3" >
      <Form onSubmit={loadFilter}>
        <Form.Group controlId="loadFilter">
          <Form.Control type="string" placeholder="Jira Filter" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Load Filter
        </Button>
      </Form>
      </Col>
      </Form.Row>
      <br/>
      <CardList profiles={cards} />
      <h2>Log History</h2>
      <LogHistory logitems={history} />
    </>
  );
};

function BuildWorkLog(event) {
  return {
     "comment": event.target.workcomment.value,
     "timeSpent": `${event.target.timelog.value}m`
  };
};

export default App;
