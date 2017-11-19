import React from 'react'
import PropTypes from 'prop-types'
import { Label, LineChart, XAxis, YAxis, Tooltip, Legend, Line, ReferenceLine } from "recharts"


export default class Graph extends React.Component {

    renderLines (lineNumber) {
        const { isDotted, plotData, colors } = this.props
        const currentDataKey = Object.keys(plotData[0])[lineNumber * 2 + 1]
        return(
            <Line key={lineNumber} dot={isDotted} type="monotone" dataKey={currentDataKey} stroke={colors[lineNumber]} />
        )
    }

    render(){
        const { referenceValue, plotData, xAxisDataKey, xAxisLabels } = this.props
        const renderLegend = () => {
            return (
              <ul>
                {
                  xAxisLabels.map((entry, index) => (
                    <li key={`item-${index}`} className={`legend-items-${index}`} style={{textAlign:'center', color: `${this.props.colors[index]}`, fontSize: '12px'}} >{entry}</li>
                  ))
                }
              </ul>
            )
        }
        const defaultKey = Object.keys(plotData[0])[0]
        const numberOfGraphLines = Object.keys(plotData[0]).length / 2
        const maxXValue = plotData[plotData.length - 1][xAxisDataKey ? xAxisDataKey : defaultKey]
        const lines = []
        for (let i = 0; i < numberOfGraphLines; i += 1) {
            lines.push(this.renderLines(i))
        }
        return(
            <div className="line-chart">
                <LineChart width={312} height={200} data={plotData}>
                    <XAxis dataKey={xAxisDataKey ? xAxisDataKey : defaultKey} stroke="#f1f3f5" />
                    <YAxis stroke="#f1f3f5"/>
                    <ReferenceLine y={referenceValue} stroke="#727e83" strokeDasharray="3 3">
                        <Label value={referenceValue} offset={5} position="left" stroke="#727e83"/>
                    </ReferenceLine>
                    <Tooltip/>
                    {lines}
                    <Legend content={renderLegend}/>
                </LineChart>
            </div>
        ) 
    }
}

Graph.propTypes = {
    /** Data to be plot */
    plotData: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** Refernce value on the y-axis */
    referenceValue: PropTypes.number,
    /** Label(s) of the x-axis */
    xAxisLabels: PropTypes.arrayOf(PropTypes.string),
    /** The datakey of the x-axis, whih will be used to scale */
    xAxisDataKey: PropTypes.string,
    /** Indicates whether the graph(s) have dots at the datapoints or not */
    isDotted: PropTypes.bool,
    /** Optional colors of the lines */
    colors: PropTypes.arrayOf(PropTypes.string)
}

Graph.defaultProps = {
    isDotted: false,
    colors: ["#9b58b5", "#46b9f3", "green", "red"],
    referenceValue: null,
    xAxisLabels: [],
    xAxisDataKey: null
}


// import * as React from "react"
// import { Label, LineChart, XAxis, YAxis, Tooltip, Legend, Line, ReferenceLine } from "recharts"
// import "./Graph.css"

// interface Props {
//     plotData: Array<object>
//     referenceValue?: number
//     xAxisLabels?: Array<string>
//     xAxisDataKey?: string
//     yAxisLabel?: string
//     isDotted?: boolean
//     colors?: Array<string>
// }

// export default class Graph extends React.Component <Props, any> {
//     public static defaultProps: Partial<Props> =
//     {
//         isDotted: false,
//         colors: ["#9b58b5", "#46b9f3", "green", "red"],
//         referenceValue: null,
//         xAxisLabels: [],
//         xAxisDataKey: null
//     }
//     constructor(props: Props) {
//         super(props)

//     }

//     renderLines (lineNumber: number) {
//         const { isDotted, plotData, colors } = this.props
//         const currentDataKey = Object.keys(plotData[0])[lineNumber * 2 + 1]
//         return(
//             <Line key={lineNumber} dot={isDotted} type="monotone" dataKey={currentDataKey} stroke={colors[lineNumber]} />
//         )
//     }

//     render() {
//         const { referenceValue, plotData, xAxisDataKey, xAxisLabels } = this.props
//         const renderLegend = () => {
//             return (
//               <ul>
//                 {
//                   xAxisLabels.map((entry, index) => (
//                     <li key={`item-${index}`} className={`legend-items-${index}`} >{entry}</li>
//                   ))
//                 }
//               </ul>
//             )
//         }
//         // Example dataset
//         // const plotData = [
//         //     {time: 1, pv: 12, x: 12, v: 122},
//         //     {time: 2, pv: 24, x: 24, v: 2},
//         //     {time: 3, pv: 13, x: 48, v: 22},
//         //     {time: 4, pv: 10, x: 64, v: 6},
//         //     {time: 5, pv: 30, x: 90, v: 10}
//         // ]
//         const defaultKey = Object.keys(plotData[0])[0]
//         const numberOfGraphLines = Object.keys(plotData[0]).length / 2
//         const maxXValue = plotData[plotData.length - 1][xAxisDataKey ? xAxisDataKey : defaultKey]
//         const lines = []
//         for (let i = 0; i < numberOfGraphLines; i += 1) {
//             lines.push(this.renderLines(i))
//         }
//         return(
//             <div className="line-chart">
//                 <LineChart width={312} height={200} data={plotData}>
//                     <XAxis dataKey={xAxisDataKey ? xAxisDataKey : defaultKey} stroke="#f1f3f5" />
//                     <YAxis stroke="#f1f3f5"/>
//                     <ReferenceLine y={referenceValue} stroke="#727e83" strokeDasharray="3 3">
//                         <Label value={referenceValue} offset={5} position="left" stroke="#727e83"/>
//                     </ReferenceLine>
//                     <Tooltip/>
//                     {lines}
//                     <Legend content={renderLegend}/>
//                 </LineChart>
//             </div>
//         ) 
//     }
// } 