import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { SALLEE } from './sallee';
import { getSentimentWidth } from './sentiment';

interface Props {
  sallee: SALLEE;
}

const SentimentChart: React.FC<Props> = (props: Props) => {
  const fullWidth = 220;

  const width = getSentimentWidth(props.sallee.sentiment, fullWidth);

  const popover = (
    <Popover id="sentiment-popover">
      <Popover.Content>
        Sentiment: {parseFloat(props.sallee.sentiment.toFixed(3))}
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger placement="top" overlay={popover}>
      <div className="sentiment" style={{ width: fullWidth }}>
        <div className="sentiment-bg"/>
        <div className="sentiment-bar" style={{ width: width }} />
        <div className="sentiment-neg">Negative</div>
        <div className="sentiment-pos">Positive</div>
      </div>
    </OverlayTrigger>
  );
}

export default SentimentChart;
