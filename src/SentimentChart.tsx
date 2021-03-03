import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { summary } from './sallee';
import { getSentimentWidth } from './sentiment';

interface Props {
  sallee: Map<string, number>;
}

const SentimentChart: React.FC<Props> = (props: Props) => {
  if (!props.sallee) {
    return <></>;
  }

  const sentiment = props.sallee.get(summary.sentiment) || 0;

  const fullWidth = 400;

  const width = getSentimentWidth(sentiment, fullWidth);

  const popover = (
    <Popover id="sentiment-popover">
      <Popover.Content>
        Sentiment: {parseFloat(sentiment.toFixed(3))}
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
