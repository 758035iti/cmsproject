import React from "react";

const Map = () => {
  return (
    <div>
      <div className="w-full h-[70vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019384367568!2d-122.42067938468188!3d37.778519779758886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1f93a2f7%3A0xb6a3c4c0c8dcb5f2!2sTwitter%20HQ!5e0!3m2!1sen!2sin!4v1618224567888!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="border-0 w-full h-full rounded-xl"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
