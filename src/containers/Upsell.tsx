import * as React from 'react'

export interface UpsellProps {
  description: string;
}

const UpsellContainer = (props: UpsellProps) => {
  return (
    <div>
      {props.description}
    </div>
  )
}

export default UpsellContainer