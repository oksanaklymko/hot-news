import React from "react";
class PrimaryButton extends React.Component {
    render() {
        return <button className='test'>{this.props.text}</button>;
    }
}

// function PrimaryButton (props) {
//     return <button className="test">{props.text}</button>;
// }

export default PrimaryButton;