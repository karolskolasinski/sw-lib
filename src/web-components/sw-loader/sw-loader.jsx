import { Component } from 'preact';
import style from './sw-loader.style.css';

export default class SwLoader extends Component {
    render() {
        return <div className="sw-loader">
            <style>{style}</style>

            <div className="loader-box">
                <div className="loader">
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        </div>;
    }
}
