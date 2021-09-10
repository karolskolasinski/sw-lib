import { Component } from 'preact';
import style from './sw-table.style.css';

export default class SwTable extends Component {
    render({ source, fields }) {
        if (source && fields && typeof source === 'object' && typeof fields === 'object') {
            this.setState({
                source: source,
                fields: fields
            });
        }

        if (this.state.source && this.state.fields) {
            return <>
                <style>{style}</style>

                <table>
                    <thead>
                    <tr>
                        {this.state.fields?.map(field => <th>{field?.label}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.source?.map(item => <tr>{this.state.fields?.map(field => field.component
                            ? <td className="components" nowrap>{field?.component(item)}</td>
                            : <td nowrap>{item[field?.field]}</td>
                        )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </>;
        } else {
            return <>
                <style>{style}</style>

                <sw-loader />
            </>;
        }
    }
}
