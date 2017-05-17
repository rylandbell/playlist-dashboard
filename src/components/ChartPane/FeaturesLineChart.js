import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, Legend, XAxis, YAxis, Tooltip, ReferenceLine} from 'recharts';
import {filterByFeatures} from '../../helper';
import TrackInfo from './TrackInfo';


class FeaturesLineChart extends Component {
  render () {
    const graphedFilters = this.props.reduxState.filters.filter(x => x.isGraphed);
    const tracks = this.props.reduxState.selectedPlaylistTracks;
    const features = this.props.reduxState.audioFeaturesData;

    const filteredTracks = tracks.filter(filterByFeatures.bind(this));
    const filteredFeatures = features.filter(filterByFeatures.bind(this));

    //add track name and artist to the features data, to pass to Recharts
    const chartData = filteredFeatures.map((track, index) => {
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

    //gives position of hovered track in filtered playlist (shifted by 1 for indexing-from-1)
    const hoveredTrackPosition = filteredTracks.indexOf(hoveredTrack) + 1;

    return (
      <ResponsiveContainer width="100%" height={330}>
        <LineChart
          data={shiftedChartData}
          margin={{ top: 20, right: 12, left: 0, bottom: 0 }}
        >
          <XAxis stroke="#ebebeb" strokeWidth={2} interval={4} dataKey={name} />
          <YAxis stroke="#ebebeb" strokeWidth={2} domain={[0, 1]} />
          <Legend />
          <ReferenceLine x={hoveredTrackPosition} label={hoveredTrackName} />
          {/*<Tooltip itemStyle={{color: 'black'}} labelStyle={{color: 'black'}} wrapperStyle={{backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)'}} />*/}
          <Tooltip content={<TrackInfo />} />
          {graphedFilters.map(filter => 
            <Line 
              dataKey={filter.name}
              name={filter.displayName}
              isAnimationActive={false} 
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