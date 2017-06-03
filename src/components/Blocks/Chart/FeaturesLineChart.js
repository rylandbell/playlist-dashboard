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
    if (this.props.animateNextChartDraw) {
     this.props.stopAnimatingChart();
    }
  }

  render () {
    const filters = this.props.filters;
    const filteredTracks = this.props.filteredTracks;
    const hoveredTrackId = this.props.hoveredTrackId;

    const graphedFilters = filters
      .filter(x => x.isGraphed)
      .sort((x,y) => y.isDim);

    //find the filter currently being dragged, when applicable
    const draggedFilterIndex = filters.findIndex(filter => filter.showReferenceLine);
    const showAnyReferenceLine = draggedFilterIndex >= 0;

    //display vertical reference line for track when hovered in the table (not the chart);
    const hoveredTrack = filteredTracks.find(track => (track.id === hoveredTrackId));
    const hoveredTrackName = hoveredTrack && hoveredTrack.name;
    
    //count track numbers from 1, not 0:
    const shiftedChartData = [{}].concat(filteredTracks);
    const hoveredTrackPosition = filteredTracks.indexOf(hoveredTrack) + 1;

    //tweak chart layout for small screens
    const smallWindow = this.props.browser.mediaType === "extraSmall" || this.props.browser.mediaType === "small";
    
    return (
      <ResponsiveContainer width="100%" height={smallWindow ? 200 : 300}>
        <LineChart
          data={shiftedChartData}
          margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
        >
          <XAxis 
            stroke="rgb(186,186,186)" 
            strokeWidth={1} 
            interval={4} 
            label={smallWindow ? null : "Track"}
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
            align={smallWindow ? 'center' : 'right'}
            verticalAlign={smallWindow ? 'bottom' : 'middle'}
            layout={smallWindow ? 'horizontal' : 'vertical'}
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
              isAnimationActive={this.props.animateNextChartDraw} 
              animationDuration={1500}
              type="monotone" 
              stroke={filter.isDim ? filter.dimColor : filter.color} 
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