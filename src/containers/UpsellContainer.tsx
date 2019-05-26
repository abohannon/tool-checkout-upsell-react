import React, { Component } from 'react'
import '../scss/style.scss'
import { addEventListeners } from '../util/utils'

interface Props {
    config: {
        inputTargets: string[];
    };
}

interface State {
    activeTarget: string;
}

export class UpsellContainer extends Component<Props, State> {
    componentDidMount(): void {
        const { config } = this.props
        addEventListeners(config.inputTargets)
    }

    handleExternalEvent = (activeTarget: string): void => {
        this.setState({
            activeTarget,
        })
    }

    render(): React.ReactNode {
        return (
          <div />
        )
    }
}

export default UpsellContainer
