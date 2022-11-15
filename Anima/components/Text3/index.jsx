import React from "react";
import "./Text3.css";

function Text3(props) {
  const { className } = props;

  return (
    <div className={`text-3-1 ${className || ""}`}>
      <p className="duis-mauris-augue-e poppins-normal-white-16px">
        Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit
        amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum
        varius. Proin eget viverra sem, non euismod est. Maecenas facilisis urna in lectus aliquet venenatis. Etiam et
        metus nec mauris condimentum vulputate. Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate luctus.
        Pellentesque vulputate viverra ex eget elementum. Aliquam ut feugiat felis.
      </p>
    </div>
  );
}

export default Text3;
