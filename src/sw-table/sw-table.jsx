import { Component } from 'preact';
import style from './sw-table.style.css';

export default class SwTable extends Component {
    render({ config: { source, fields} }) {
        if (source && typeof source === 'string') {
            source = JSON.parse(source);
        }

        if (fields && typeof fields === 'string') {
            fields = JSON.parse(fields);
        }

        if (source && fields) {
            return <>
                <style>{style}</style>

                <table>
                    <thead>
                    <tr>
                        {fields?.map(field => <th>{field?.label}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {source?.map(item => <tr>{fields?.map(field => field.component
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
