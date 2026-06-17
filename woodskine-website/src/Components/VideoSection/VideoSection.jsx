import "./VideoSection.css";

import { LuCreditCard } from "react-icons/lu";
import { FiTruck } from "react-icons/fi";
import { TbPackageExport } from "react-icons/tb";

export default function VideoSection() {
  return (
    <section className="video-section">

      {/* Youtube Video */}

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/wAacD_7fdBY?rel=0"
          title="Woodskine Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>


      {/* Features */}

      <div className="features">

        <div className="feature">
           <LuCreditCard className="feature-icon" />

          <h3>INVOICE PAYMENT</h3>

          <p>
            Invoice payment, Twint, Post Finance or credit card
          </p>
        </div>


        <div className="feature">
          <FiTruck className="feature-icon" />

          <h3>FREE SHIPPING</h3>

          <p>
            Free shipping in Switzerland
          </p>
        </div>


        <div className="feature">
           <TbPackageExport className="feature-icon" />

          <h3>FREE RETURNS</h3>

          <p>
            You can return the item for any reason in new and unused
            condition for up to 30 days
          </p>
        </div>

      </div>

    </section>
  );
}