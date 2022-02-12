import React from 'react';
import coverImage from "../../assets/images/mountains.jpg";

function Main() {
  return (
    <section>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default Main;