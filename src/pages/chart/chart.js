import React from "react";
import {Col, Row} from 'antd';
import './chart.css'
import LineChart from "../../components/viserChart/lineChart";

import GroupBarChart from '../../components/viserChart/groupBarChart'

import RingPieChart from '../../components/viserChart/ringPieChart'

const sourceData = [
    {month: 'Jan', Tokyo: 7.0, London: 3.9, Beijing: 10},
    {month: 'Feb', Tokyo: 6.9, London: 4.2, Beijing: 11},
    {month: 'Mar', Tokyo: 9.5, London: 5.7, Beijing: 12},
    {month: 'Apr', Tokyo: 14.5, London: 8.5, Beijing: 13},
    {month: 'May', Tokyo: 18.4, London: 11.9, Beijing: 14},
    {month: 'Jun', Tokyo: 21.5, London: 15.2, Beijing: 15},
    {month: 'Jul', Tokyo: 25.2, London: 17.0, Beijing: 14},
    {month: 'Aug', Tokyo: 26.5, London: 16.6, Beijing: 12},
    {month: 'Sep', Tokyo: 23.3, London: 14.2, Beijing: 8},
    {month: 'Oct', Tokyo: 18.3, London: 10.3, Beijing: 7},
    {month: 'Nov', Tokyo: 13.9, London: 6.6, Beijing: 18},
    {month: 'Dec', Tokyo: 9.6, London: 4.8, Beijing: 9},
];

const groupBarChartSourceData = [
    {
        name: 'London',
        'Jan.': 18.9,
        'Feb.': 28.8,
        'Mar.': 39.3,
        'Apr.': 81.4,
        'May': 47,
        'Jun.': 20.3,
        'Jul.': 24,
        'Aug.': 35.6
    },
    {
        name: 'Berlin',
        'Jan.': 12.4,
        'Feb.': 23.2,
        'Mar.': 34.5,
        'Apr.': 99.7,
        'May': 52.6,
        'Jun.': 35.5,
        'Jul.': 37.4,
        'Aug.': 42.4
    },
];

const ringPieChartData = [
    {item: '事例一', count: 40},
    {item: '事例二', count: 21},
    {item: '事例三', count: 17},
    {item: '事例四', count: 13},
    {item: '事例五', count: 9}
];

export default class Chart extends React.Component {

    constructor() {
        super();
        this.state = {
            lineChartParam: {
                sourceData: sourceData,
                height: 300,
                type: 'fold',
                fields: ['Tokyo', 'London', 'Beijing'],
                key: 'city',
                value: 'temperature',
                dataKey: 'month'
            },
            groupBarChartParam: {
                sourceData: groupBarChartSourceData,
                height: 300,
                type: 'fold',
                fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
                key: '月份',
                value: '月均降雨量'
            },
            ringPieChartParam: {
                height: 300,
                sourceData: ringPieChartData,
                dataKey: 'item',
                field: 'count'
            }
        }
    }

    render() {
        return (
            <div className="main">
                <Row gutter={[8, 0]} className="row">
                    <Col span={6}>
                        <div className="chart-area">
                            <LineChart props={this.state.lineChartParam}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="chart-area">
                            <GroupBarChart props={this.state.groupBarChartParam}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="chart-area">
                            <RingPieChart props={this.state.ringPieChartParam}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="chart-area">
                            <RingPieChart props={this.state.ringPieChartParam}/>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 0]} className="row">
                    <Col span={6}>
                        <div className="chart-area">
                            <LineChart props={this.state.lineChartParam}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="chart-area">
                            <GroupBarChart props={this.state.groupBarChartParam}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="chart-area">
                            <RingPieChart props={this.state.ringPieChartParam}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="chart-area">
                            <RingPieChart props={this.state.ringPieChartParam}/>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 0]} className="row">
                    <Col span={6}>
                        <div className="chart-area">
                            <LineChart props={this.state.lineChartParam}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="chart-area">
                            <GroupBarChart props={this.state.groupBarChartParam}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="chart-area">
                            <RingPieChart props={this.state.ringPieChartParam}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="chart-area">
                            <RingPieChart props={this.state.ringPieChartParam}/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}