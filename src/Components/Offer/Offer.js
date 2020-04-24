import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="g gtc-1 gtc-md-2 gtc-lg-3 gg-20 max-w-xl px-4 px-xl-0 py-5 Offer bt-1">
      <div>
        <Avatar
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/psacloud/image/upload/v1587744954/cef389b486cb4827e6ba007f26ebddab_an1ma8.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h5 className="mt-3 mb-2">Feed your employees?</h5>
        <Button type="transparent secondary">
          <span>Create a business account</span>
        </Button>
      </div>
      <div>
        <Avatar
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/psacloud/image/upload/v1587745156/7f56b34e6c253cb54a35bacf5150dde9_efrc43.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h5 className="mt-3 mb-2">Wanna join with us?</h5>
        <Button type="transparent secondary">
          <span>Add your restaurant</span>
        </Button>
      </div>
      <div>
        <Avatar
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/psacloud/image/upload/v1587745149/84d6770ca439c4b1ba2d6f53adc1d039_x9rau8.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h5 className="mt-3 mb-2">Apply deliver job?</h5>
        <Button type="transparent secondary">
          <span>Apply job</span>
        </Button>
      </div>
    </div>
  );
};

export default Offer;
