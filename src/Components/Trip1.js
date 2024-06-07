import React from 'react'
import "../Components/CSS/TripStyle1.css";
import Tripdata from "./Tripdata1";
import Trip11 from "../Assets/lotus.jpg"
import Trip21 from "../Assets/meemure.jpg"
import Trip31 from "../Assets/riverston.jpg"
import Trip41 from "../Assets/kandy.jpg"
import Trip51 from "../Assets/yaala.jpg"
import Trip61 from "../Assets/mirissa.jpg"

export default function Trip1() {
    return (
        <div>
            <div className="trip1">
                {/* <h1>Recent Trips</h1>
            <p>You have the opportunity to explore every corner of Sri Lanka.</p> */}
                <div className="tripcard1">

                    <Tripdata
                        image={Trip51}
                        heading="Trip to Yala National Park"
                        text="Yala National Park, situated in the southeast of Sri Lanka, is a wildlife enthusiast's paradise. Renowned for its diverse ecosystems, Yala is home to a rich array of flora and fauna. The park is particularly famous for its population of leopards, making it one of the best places in the world for leopard sightings. Besides these elusive big cats, Yala hosts a variety of animals, including elephants, sloth bears, and a myriad of bird species. The rugged landscapes and the thrill of encountering wildlife in their natural habitat make Yala a must-visit destination for nature lovers and safari enthusiasts."
                    />
                    <Tripdata
                        image={Trip11}
                        heading="Trip to Lotus Tower"
                        text="Lotus Tower, located in Colombo, Sri Lanka, is an iconic telecommunications and observation tower. Standing at 356 meters, it is the tallest structure in South Asia. 
                    Shaped like a blooming lotus flower, the tower serves as a symbol of technological advancement and architectural elegance. 
                    Visitors can enjoy panoramic views of the city from the observation deck, making it a significant landmark in Colombo."
                    />

                    <Tripdata
                        image={Trip21}
                        heading="Trip to Meemure "
                        text="Meemure is a remote and picturesque village hidden in the Knuckles Mountain Range. 
                    Accessible by challenging routes, Meemure is known for its pristine natural beauty, traditional way of life, and cultural richness. 
                    Surrounded by dense forests and cascading waterfalls, the village offers an authentic experience of rural Sri Lankan life. Visitors can explore nature trails, interact with the friendly villagers, and enjoy the tranquility of this off-the-beaten-path destination."
                    />

                    <Tripdata
                        image={Trip31}
                        heading="Trip to Riverston"
                        text="Riverston is a scenic area nestled in the Knuckles Mountain Range, offering breathtaking landscapes and lush greenery. 
                    Popular for its mist-covered hills, picturesque valleys, and diverse flora and fauna, Riverston is a favorite destination for nature lovers and hikers. 
                    The Mini World's End viewpoint provides stunning views of the surrounding mountains and terraced tea plantations, making it a serene retreat in the heart of Sri Lanka."
                    />

                    <Tripdata
                        image={Trip41}
                        heading="Trip to Temple of the Tooth (Sri Dalada Maligawa)"
                        text="The Temple of the Tooth, also known as Sri Dalada Maligawa, is a sacred Buddhist temple located in the cultural heart of Kandy. This UNESCO World Heritage Site houses a relic believed to be the tooth of Lord Buddha. The temple complex, with its intricate architecture and serene surroundings, attracts pilgrims and visitors alike. The sacred tooth relic is venerated during the grand Esala Perahera, a vibrant cultural festival featuring traditional dances, adorned elephants, and spirited processions."
                    />



                    <Tripdata
                        image={Trip61}
                        heading="Trip to Mirissa"
                        text="Mirissa, nestled along the southern coast of Sri Lanka, is a coastal paradise renowned for its pristine beaches and laid-back atmosphere. This picturesque fishing village has evolved into a popular tourist destination, offering golden sands, turquoise waters, and vibrant coral reefs. Mirissa is not only a haven for beach lovers but also a starting point for whale watching excursions, allowing visitors to witness the majesty of these magnificent marine creatures in their natural habitat."
                    />
                </div>
            </div>

        </div>
    )
}
