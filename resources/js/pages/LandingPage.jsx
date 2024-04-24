import React from "react";
import lobby from "../assets/loby.png";
import logo2 from "../assets/logo2.png";
import doctor from "../assets/doctor.png";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../../css/style.css";

function LandingPage() {
    return (
        <div className="flex flex-col items-center overflow-hidden">
            <div className="relative w-[100vw] h-auto">
                <img className="w-full h-auto" src={lobby} alt="Lobby" />
                <div className="absolute top-10 left-20 " >
                    <img src={logo2} alt="Overlay" className="w-full lg:w-full md:w-96 sm:w-72 "/>
                </div>
                <div className="absolute top-40 left-20 text-white text-xl  lg:text-xl md:text-lg sm:text-base xs:text-sm kaisei">
                    Pulse by Pulse, Protecting Hearts
                </div>
                {/* Position the Button using a wrapper with position styles */}
                <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Button text="Check Your Heart Now" />
                </div>
            </div>

            <div className="w-full m-10 bg-white p-4 mt-4 flex flex-col md:flex-row">
                <img src={doctor} alt="Doctor" className="mb-4 md:mb-0 md:mr-8 w-full md:w-auto h-auto" />
                <div className="flex-1">
                    <div className="text-[30px] md:text-[24px] kanit text-custom-green">Lorem ipsum dolor sit amet</div>
                    <p className="text-[15px] mt-2 kaisei text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus itaque tempora ex, quisquam fuga perspiciatis nemo error officia numquam hic fugiat, esse quibusdam quas saepe. Odio, similique, est consequatur, unde assumenda cum reprehenderit obcaecati incidunt eum suscipit accusamus accusantium sed. Explicabo suscipit atque vitae. Quos fuga qui dicta, dolores deleniti explicabo ea eligendi ab aut, asperiores id cum omnis ratione totam veniam atque voluptate officiis numquam aliquid expedita doloribus fugit. Libero ipsa neque eum adipisci nam rem cumque aspernatur nobis praesentium sint quod ducimus facere, exercitationem veniam in aliquam ab id atque? Ad vel consectetur ex cupiditate ducimus a voluptatum, delectus aliquam quidem, vitae id officiis obcaecati quasi inventore excepturi architecto accusamus. Officiis qui laboriosam nesciunt, quidem magnam voluptas quas, excepturi, ipsa error est corrupti perspiciatis placeat dicta itaque amet. Debitis error laudantium voluptate quia ab, iusto suscipit aut hic necessitatibus exercitationem quidem id ea qui ad atque odio.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;
