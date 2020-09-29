import React from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const average = (data) => {
  return Math.round(_.sum(data) / data.length);
};

const Chart = ({ items, color, units }) => {
  return (
    <div>
      <Sparklines data={items} width={180} height={120}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        Ave: {average(items)}, Min: {Math.round(_.min(items))}, Max:
        {Math.round(_.max(items))} {units}
      </div>
    </div>
  );
};

export default Chart;
