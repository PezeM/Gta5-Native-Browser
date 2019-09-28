import React from 'react';
import { INative } from '../constans/interfaces';
import { camelizeText } from '../helpers/text';

interface Props {
    native: INative
}

export default class Native extends React.Component<Props, {}> {
    getNativeName(): string{
        return camelizeText(this.props.native.name);
    }

    getNativeParams(){
        const params: JSX.Element[] = [];
        const paramsLength = this.props.native.params.length;

        for (let i = 0; i < paramsLength; i++) {
            const param = this.props.native.params[i];
            
            let addSpace = (i + 1 !== paramsLength);
            params.push(<span key={i}>
                            <span className="param-type">{param.type}</span>
                            <span className="param-name"> {param.name}{addSpace ? ', ' : ''}</span>
                        </span>)
        }
        return <span>({params})</span>
    }

    render(){
        return(
            <li className="native">
                <span className="param-type">{this.props.native.return_type}</span> <span className="native-name">{this.getNativeName()}</span> 
                {this.getNativeParams()}
            </li>
        )
    }
}