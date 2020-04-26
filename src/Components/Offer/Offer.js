import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./Offer.css";
import { offerLists } from "../../DummyData/offerLists";

const Offer = () => {
  return (
    <div className="g gtc-1 gtc-md-2 gtc-lg-3 gg-20 max-w-xl px-4 px-xl-0 py-5 Offer bt-1 bb-1">
      {offerLists.map((offer, index) => {
        return (
          <div key={index}>
            <Avatar/>
            <h5 className="mt-3 mb-2">{offer.type_name}</h5>
            <Button type="transparent secondary">
              <span>{offer.link_name}</span>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Offer;
