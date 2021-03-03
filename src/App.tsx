import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import EmotionChart from './EmotionChart';
import FeelChart from './FeelChart';
import SentimentChart from './SentimentChart';

interface Payload {
  key: string;
  secret: string;
  content: string;
}

function App() {
  const keyRef = useRef<HTMLInputElement>(null);
  const secretRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [payload, setPayload] = useState<Payload | undefined>(undefined);
  const [sallee, setSallee] = useState<Map<string, number> | undefined>(undefined);
  const [error, setError] = useState('');

  useEffect(() => {
    setSallee(undefined);

    if (!payload) {
      return;
    }

    const fetchData = async () => {
      const result = await axios.post(
        'http://localhost:8080/',
        payload
      );

      const results = result?.data?.results;
      if (!results || !results.length) {
        setError(result?.data?.message ?
          result.data.message :
          'Unknown error');
        return;
      }

      const measures = results[0].dictionary_measures;
      if (!measures) {
        setError(results[0].error?.message ?
          results[0].error.message :
          'Unknown error');
        return;
      }

      const sallee = new Map();
      Object.keys(measures).forEach((k) => {
        sallee.set(k, measures[k]);
      });

      setSallee(sallee);
    };

    fetchData();
  }, [payload]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    evt.stopPropagation();

    const form = evt.currentTarget;
    if (form.checkValidity() === false) {
      setPayload(undefined);
      return;
    }

    setPayload({
      key: keyRef.current!.value,
      secret: secretRef.current!.value,
      content: contentRef.current!.value
    });
  };

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
          <EmotionChart/>
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
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="form-key">
                  <Form.Label>API Key</Form.Label>
                  <Form.Control type="text" ref={keyRef} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="form-password">
                  <Form.Label>API Secret</Form.Label>
                  <Form.Control type="password" ref={secretRef} required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="form-content">
              <Form.Label>Text to Analyze</Form.Label>
              <Form.Control as="textarea" rows={3} ref={contentRef} required />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <hr/>
      {results}
    </Container>
  );
}

export default App;
