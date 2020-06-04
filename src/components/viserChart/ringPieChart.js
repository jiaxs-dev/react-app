import {Axis, Chart, Coord, Legend, Pie, Tooltip} from 'viser-react';
import * as React from 'react';

const DataSet = require('@antv/data-set');

export default class App extends React.Component {

    constructor(props) {
        super();
        console.log(props)
        let sourceData = props.props.sourceData;

        const dv = new DataSet.View().source(sourceData);

        const scale = [{
            dataKey: 'percent',
            min: 0,
            formatter: '.0%',
        }];

        dv.transform({
            type: 'percent',
            field: props.props.field,
            dimension: props.props.dataKey,
            as: 'percent',
        });
        const data = dv.rows;


        this.state = {
            height: props.props.height,
            data: data,
            scale: scale,
            dataKey: props.props.dataKey,
            showTitle: false,
            position: 'percent',
        }
    }

    render() {
        return (
            <Chart forceFit height={this.state.height} padding={'auto'} data={this.state.data} scale={this.state.scale}>
                <Tooltip showTitle={this.state.showTitle}/>
                <Axis/>
                <Legend dataKey={this.state.dataKey}/>
                <Coord type="theta" radius={0.75} innerRadius={0.6}/>
                <Pie position={this.state.position} color="item" style={{stroke: '#fff', lineWidth: 1}}
                     label={[this.state.position, {
                         formatter: (val, item) => {
                             return item.point.item + ': ' + val;
                         }
                     }]}
                />
            </Chart>
        );
    }
}





