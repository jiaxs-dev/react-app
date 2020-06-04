import {Axis, Chart, Legend, Point, SmoothLine, Tooltip} from 'viser-react';
import * as React from 'react';

const DataSet = require('@antv/data-set');

export default class LineChart extends React.Component {

    constructor(props) {
        super();
        let sourceData = props.props.sourceData;

        const dv = new DataSet.View().source(sourceData);
        dv.transform({
            type: props.props.type,
            fields: props.props.fields,
            key: props.props.key,
            value: props.props.value,
        });
        const data = dv.rows;

        const scale = [{
            dataKey: props.props.dataKey,
            min: 0,
            max: 1,
        }];

        this.state = {
            height: props.props.height,
            data: data,
            scale: scale,
            position: props.props.dataKey+"*"+props.props.value
        }
    }

    render() {
        return (<Chart forceFit={true} padding='auto' height={this.state.height} data={this.state.data} scale={this.state.scale}>
            <Tooltip/>
            <Axis/>
            <Legend/>
            <SmoothLine position={this.state.position} color="city"/>
            <Point position={this.state.position} color="city" shape="circle"/>
        </Chart>)
    }

}