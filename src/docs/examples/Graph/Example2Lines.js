import React from 'react'
import Graph from 'ps-react/Graph'

export default function Example2Lines() {

       const plotData = [
              {time: 1, pv: 12, x: 12, v: 122},
              {time: 2, pv: 24, x: 24, v: 2},
              {time: 3, pv: 13, x: 48, v: 22},
              {time: 4, pv: 10, x: 64, v: 6},
              {time: 5, pv: 30, x: 90, v: 10}
          ]
    return <Graph plotData={plotData} />
}