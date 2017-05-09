import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';

class FeaturesLineChart extends Component {
  render () {
    const data = this.props.reduxState.audioFeatures || [];
    return (
      <ResponsiveContainer width="95%" height={300}>
        <LineChart
          data={data}
        >
          <XAxis stroke="#ebebeb" strokeWidth={2} />
          <YAxis stroke="#ebebeb" strokeWidth={2} domain={[0, 1]} />
          {/*<CartesianGrid strokeDasharray="10 3"/>*/}
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="danceability" stroke="#5bc0de" strokeWidth={3} dot={false} activeDot={{r: 8}}/>
          {/*<Line type="monotone" dataKey="valence" stroke="#82ca9d" strokeWidth={3} dot={false} activeDot={{r: 8}}/>*/}
          {/*<Line type="monotone" dataKey="valence" stroke="#82ca9d" />*/}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default FeaturesLineChart;