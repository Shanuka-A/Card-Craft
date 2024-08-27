import React, { Component } from "react";
import "../Components/CSS/DestinationStyle.css";
import DesData from "./DesData";
import card1 from '../Assets/1.png';
import card2 from '../Assets/3.png';
import card3 from '../Assets/2.png';
import card4 from '../Assets/4.png';
import card5 from '../Assets/modern 2.png';
import card6 from '../Assets/Company Logo Best Company (2).png';
import card7 from '../Assets/modern.png';
import card8 from '../Assets/Company Logo Best Company.png';
import card9 from '../Assets/3B.png';
import card10 from '../Assets/3F.png';
import card11 from '../Assets/4B.png';
import card12 from '../Assets/4F.png';
import card13 from '../Assets/2B.png';
import card14 from '../Assets/2F.png';


class Destination extends Component {
    state = { showMoreIndex: null };

    handleToggle = (index) => {
        this.setState({ showMoreIndex: index === this.state.showMoreIndex ? null : index });
    }

    render() {
        const { showMoreIndex } = this.state;

        return (
            <div className='destination'>
                <h1>Our Products</h1>
                <p>People do not buy goods and services. They buy relations, stories, and magic.</p>

                <DesData
                    className="first-des"
                    heading="Basic White"
                    price="Rs.3000.00"
                    text="Card with black letters and white color background.
                    We will create a web profile without a fee. See demo profile.
                    The front of the card will have your name and your company name.
                    The back of the card will have your brand company and QR code.
                    This card is the size of a credit card. (8.6cm x 5.4cm)"
                    img1={card1}
                    img2={card2}
                    showMore={showMoreIndex === 0}
                    onToggle={() => this.handleToggle(0)}
                />

                <DesData
                    className="first-des-reverse"
                    heading="Basic Black"
                    price="Rs.3500.00"
                    text="Card with black letters and white color background.
                    We will create a web profile without a fee. See demo profile.
                    The front of the card will have your name and your company name.
                    The back of the card will have your brand company and QR code.
                    This card is the size of a credit card. (8.6cm x 5.4cm)"
                    img1={card3}
                    img2={card4}
                    showMore={showMoreIndex === 1}
                    onToggle={() => this.handleToggle(1)}
                />

                <DesData
                    className="first-des"
                    heading="Basic White (Web)"
                    price="Rs.30000.00"
                    text="Card with black letters and white color background.
                    We build a 5 page website for your business or other purposes with 1 year free hosting and domain.
                    We will create a web profile without a fee. See demo profile.
                    The front of the card will have your name and your company name.
                    The back of the card will have your brand company and QR code.
                    This card is the size of a credit card. (8.6cm x 5.4cm)"
                    img1={card5}
                    img2={card6}
                    showMore={showMoreIndex === 2}
                    onToggle={() => this.handleToggle(2)}
                />

                <DesData
                    className="first-des-reverse"
                    heading="Basic Black (Web)"
                    price="Rs.30500.00"
                    text="Card with black letters and white color background.
                    We build a 5 page website for your business or other purposes with 1 year free hosting and domain.
                    We will create a Luviroyal web profile without a fee. See Luviroyal demo profile.
                    The front of the card will have your name and your company name.
                    The back of the card will have your brand company and QR code.
                    This card is the size of a credit card. (8.6cm x 5.4cm)"
                    img1={card7}
                    img2={card8}
                    showMore={showMoreIndex === 3}
                    onToggle={() => this.handleToggle(3)}
                />

                <DesData
                    className="first-des"
                    heading="Basic White (Web)"
                    price="Rs.30000.00"
                    text="Card with black letters and white color background.
                    We build a 5 page website for your business or other purposes with 1 year free hosting and domain.
                    We will create a web profile without a fee. See demo profile.
                    The front of the card will have your name and your company name.
                    The back of the card will have your brand company and QR code.
                    This card is the size of a credit card. (8.6cm x 5.4cm)"
                    img1={card11}
                    img2={card12}
                    showMore={showMoreIndex === 2}
                    onToggle={() => this.handleToggle(2)}
                />

                <DesData
                    className="first-des-reverse"
                    heading="Basic Black (Web)"
                    price="Rs.30500.00"
                    text="Card with black letters and white color background.
                    We build a 5 page website for your business or other purposes with 1 year free hosting and domain.
                    We will create a Luviroyal web profile without a fee. See Luviroyal demo profile.
                    The front of the card will have your name and your company name.
                    The back of the card will have your brand company and QR code.
                    This card is the size of a credit card. (8.6cm x 5.4cm)"
                    img1={card9}
                    img2={card10}
                    showMore={showMoreIndex === 3}
                    onToggle={() => this.handleToggle(3)}
                />
                <DesData
                    className="first-des"
                    heading="Basic White (Web)"
                    price="Rs.30000.00"
                    text="Card with black letters and white color background.
                    We build a 5 page website for your business or other purposes with 1 year free hosting and domain.
                    We will create a web profile without a fee. See demo profile.
                    The front of the card will have your name and your company name.
                    The back of the card will have your brand company and QR code.
                    This card is the size of a credit card. (8.6cm x 5.4cm)"
                    img1={card13}
                    img2={card14}
                    showMore={showMoreIndex === 2}
                    onToggle={() => this.handleToggle(2)}
                />

            </div>
        );
    }
}

export default Destination;
