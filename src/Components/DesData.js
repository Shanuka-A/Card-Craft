import React, { Component } from "react";
import "../Components/CSS/DestinationStyle.css";

class DesData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
        };
    }

    toggleShowMore = () => {
        this.setState((prevState) => ({
            showMore: !prevState.showMore,
        }));
    };

    render() {
        const { className, heading, price, text, img1, img2 } = this.props;
        const { showMore } = this.state;

        return (
            <div className={className}>
                <div className='des-text'>
                    <h2>{heading} <br /> {price}</h2>
                    {showMore && <p>{text}</p>}
                    <button onClick={this.toggleShowMore}>
                        {showMore ? "Show Less" : "See More"}
                    </button>
                </div>
                <div className='image'>
                    <img alt='img' src={img1} />
                    <img alt='img' src={img2} />
                </div>
            </div>
        );
    }
}

export default DesData;
