import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { SALLEE } from './sallee';
import EmotionChart from './EmotionChart';
import FeelChart from './FeelChart';
import SentimentChart from './SentimentChart';

interface Payload {
  key: string;
  secret: string;
  content: string;
}

// TODO
// Replace this with the URL of your API.
const url = '';

function App() {
  const [payload, setPayload] = useState<Payload | undefined>(undefined);
  const [sallee, setSallee] = useState<SALLEE | undefined>(undefined);
  const [error, setError] = useState('');

  useEffect(() => {
    setSallee(undefined);
    if (!payload) {
      return;
    }

    const fetchData = async () => {
      const result = await axios.post(url, payload);

      // TODO
      // Parse `results` and call `setSallee` with the SALLEE `scores` (rather
      // than `counts`) if everything looks good.
      // Hint: Be sure to check for both Top Level Errors and Nested Errors as
      // defined here: https://dashboard.receptiviti.com/docs/api
    };

    fetchData();
  }, [payload]);

  // TODO
  // Define a function called `handleSubmit` that is called when the form is
  // submitted. It should call `setPayload` with `undefined` if the form is
  // invalid or with a valid payload otherwise.

  let results: JSX.Element = <></>;
  if (sallee) {
    results = (
      <Row>
        <Col>
          <Row>
            <Col className="chart">
              <h3>Sentiment</h3>
              <SentimentChart sallee={sallee}/>
            </Col>
          </Row>
          <Row>
            <Col className="chart">
              <h3>Feel Breakdown</h3>
              <FeelChart sallee={sallee}/>
            </Col>
          </Row>
        </Col>
        <Col className="chart">
          <h3>Emotion Breakdown</h3>
          <EmotionChart sallee={sallee}/>
        </Col>
      </Row>
    );
  } else if (error) {
    results = (
      <Alert variant="danger">
        ERROR: {error}
      </Alert>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>SALLEE</h1>
          {
            // TODO
            // Add a form here to accept `key`, `secret` and `content`. You can
            // use the form elements from Bootstrap (which is already bundled)
            // or something like React Final Form.
          }
        </Col>
      </Row>
      <hr/>
      {results}
    </Container>
  );
}

export default App;
