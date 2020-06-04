import {Axis, Bar, Chart, Legend, Tooltip} from 'viser-react';
import * as React from 'react';

const DataSet = require('@antv/data-set');

export default class App extends React.Component {

    constructor(props) {
        super();
        console.log(props)
        let sourceData = props.props.sourceData;

        const dv = new DataSet.View().source(sourceData);
        dv.transform({
            type: props.props.type,
            fields: props.props.fields,
            key: props.props.key,
            value: props.props.value,
        });
        const data = dv.rows;


        this.state = {
            height: props.props.height,
            data: data,
            position: props.props.key + "*" + props.props.value
        }
    }

    render() {
        return (
            <Chart forceFit padding={'auto'} height={this.state.height} data={this.state.data}>
                <Tooltip/>
                <Axis/>
                <Legend/>
                <Bar position={this.state.position} color="name" adjust={[{type: 'dodge', marginRatio: 1 / 32}]}/>
            </Chart>
        );
    }
}

