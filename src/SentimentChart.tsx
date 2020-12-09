import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { SALLEE } from './sallee';

interface Props {
  sallee: SALLEE;
}

const SentimentChart: React.FC<Props> = (props: Props) => {
  const halfWidth = 220;

  // TODO
  // Calculate `width` from `props.sallee.sentiment`. SALLEE sentiment can
  // range from -1 to 1, so `width` should range from 0 to `2 * halfWidth`.
  const width = 0;

  const popover = (
    <Popover id="sentiment-popover">
      <Popover.Content>
        Sentiment: {parseFloat(props.sallee.sentiment.toFixed(3))}
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger placement="top" overlay={popover}>
      <div className="sentiment" style={{ width: 2 * halfWidth }}>
        <div className="sentiment-bg"/>
        <div className="sentiment-bar" style={{ width: width }} />
        <div className="sentiment-neg">Negative</div>
        <div className="sentiment-pos">Positive</div>
      </div>
    </OverlayTrigger>
  );
}

export default SentimentChart;
