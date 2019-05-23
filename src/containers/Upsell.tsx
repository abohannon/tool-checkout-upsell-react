import * as React from 'react'
import '../scss/style.scss'
import { addEventListeners } from '../util/utils'

export interface Props {
    config: {
        inputTargets: string[];
    };
}

export interface State {
    activeTarget: string;
}

export class UpsellContainer extends React.Component<Props, State> {
    componentDidMount() {
        const { config } = this.props
        addEventListeners(config.inputTargets)
    }

    handleExternalEvent = (activeTarget: string): void => {
        this.setState({
            activeTarget,
        })
    }

    render() {
        return (
          <div />
        )
    }
}

export default UpsellContainer
