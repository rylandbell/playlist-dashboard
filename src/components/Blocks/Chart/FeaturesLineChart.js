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
    const filters = this.props.reduxState.filters;
    const graphedFilters = filters.filter(x => x.isGraphed);

    //find the filter currently being dragged, when applicable
    const draggedFilterIndex = filters.findIndex(filter => filter.showReferenceLine);
    const showAnyReferenceLine = draggedFilterIndex >= 0;

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
    const hoveredTrackRow = this.props.reduxState.hoveredTrackRow;
    const hoveredTrackName = hoveredTrackRow && hoveredTrackRow.track.name;

    //gives position of hovered track in filtered playlist (shifted by 1 for counting-from-1)
    const hoveredTrackPosition = filteredTracks.indexOf(hoveredTrackRow) + 1;

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={shiftedChartData}
          margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
        >
          <XAxis 
            stroke="rgb(186,186,186)" 
            strokeWidth={1} 
            interval={4} 
            label="Track"
            tick={{ dy: 5 }}
          />
          <YAxis 
            stroke="rgb(186,186,186)  " 
            strokeWidth={1} 
            domain={[0, 1]} 
            interval={1} 
            tick={{ dx: -5}}
            padding={{ bottom: 15 }}
          />
          <Legend 
            iconSize={18}
            align="right"
            verticalAlign="middle"
            layout="vertical"
          />
          <ReferenceLine x={hoveredTrackPosition} label={hoveredTrackName} />
          {showAnyReferenceLine ? 
            <ReferenceLine y={filters[draggedFilterIndex].currentValue[0]} label={filters[draggedFilterIndex].currentValue[0]} stroke={filters[draggedFilterIndex].color} strokeDasharray="3 3" /> : 
            null
          }
          {showAnyReferenceLine ? 
            <ReferenceLine y={filters[draggedFilterIndex].currentValue[1]} label={filters[draggedFilterIndex].currentValue[1]} stroke={filters[draggedFilterIndex].color} strokeDasharray="3 3" /> :
            null
          }
          <Tooltip content={<TrackInfoTooltip />} /> 
          {graphedFilters.map(filter => 
            <Line 
              dataKey={filter.name}
              name={filter.displayName}
              isAnimationActive={this.props.reduxState.animateNextChartDraw} 
              animationDuration={1500}
              type="monotone" 
              stroke={filter.color} 
              strokeWidth={2} 
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