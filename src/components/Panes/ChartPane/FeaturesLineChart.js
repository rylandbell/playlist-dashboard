import React, { Component } from 'react';

//import components separately to reduce bundle size:
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import Legend from 'recharts/lib/component/Legend';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Tooltip from 'recharts/lib/component/Tooltip';
import ReferenceLine from 'recharts/lib/cartesian/ReferenceLine';

import TrackInfoTooltip from './TrackInfoTooltip';

class FeaturesLineChart extends Component {

  //Don't animate chart on updates:
  componentWillUpdate(e) {
    if (this.props.reduxState.animateNextChartDraw) {
     this.props.stopAnimatingChart();
    }
  }

  render () {
    const graphedFilters = this.props.reduxState.filters.filter(x => x.isGraphed);

    const filteredTracks = this.props.filteredTracks;
    const filteredFeaturesData = this.props.filteredFeaturesData;

    //add track name and artist to the features data, to pass to Recharts
    const chartData = filteredFeaturesData.map((track, index) => {
      const trackInfo = {
        name: filteredTracks[index].track.name,
        artist: filteredTracks[index].track.artists[0].name
      }
      return Object.assign({}, track, trackInfo);
    });

    //count track numbers from 1, not 0:
    const shiftedChartData = [{}].concat(chartData);

    //display vertical reference line for track when hovered in the table (not the chart);
    const hoveredTrack = this.props.reduxState.hoveredTrack;
    const hoveredTrackName = hoveredTrack ? hoveredTrack.track.name : null;

    //gives position of hovered track in filtered playlist (shifted by 1 for counting-from-1)
    const hoveredTrackPosition = filteredTracks.indexOf(hoveredTrack) + 1;

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={shiftedChartData}
          margin={{ top: 20, right: 12, left: 0, bottom: 0 }}
        >
          <XAxis stroke="#ebebeb" strokeWidth={2} interval={4} />
          <YAxis stroke="#ebebeb" strokeWidth={2} domain={[0, 1]} />
          <Legend 
            iconSize={18}
          />
          <ReferenceLine x={hoveredTrackPosition} label={hoveredTrackName} />
          <Tooltip content={<TrackInfoTooltip />} />
          {graphedFilters.map(filter => 
            <Line 
              dataKey={filter.name}
              name={filter.displayName}
              isAnimationActive={this.props.reduxState.animateNextChartDraw} 
              animationDuration={1500}
              type="monotone" 
              stroke={filter.color} 
              strokeWidth={3} 
              dot={false} 
              connectNulls={true} 
              activeDot={{r: 8}} 
              key={filter.name} 
            />
          )}
          
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default FeaturesLineChart;