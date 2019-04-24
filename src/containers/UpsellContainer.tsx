import * as React from 'react'

export interface UpsellProps {
  description: string;
}

export const UpsellContainer = (props: UpsellProps) => {
  return (
    <div>
      {props.description}
    </div>
  )
}