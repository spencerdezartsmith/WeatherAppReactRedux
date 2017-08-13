import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} svgWidth={250} svgHeight={100}>
        <SparklinesLine color={props.color}/>
      </Sparklines>
    </div>
  )
}
