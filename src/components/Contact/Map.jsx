import React from "react";

const Map = () => {
  return (
    <div className="my-6 w-9/12 h-[400px] rounded-lg overflow-hidden shadow-md mx-auto">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.4502294030895!2d-93.3783794!3d43.1370741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f10a62627eb46d%3A0xb4c6a71f57d7d9ba!2sLake%20Time%20Brewery!5e0!3m2!1sen!2sus!4v1682812227666!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        style={{
          border: 0,
          width: "100%",
          height: "100%",
        }}
        allowFullScreen=""
      />
    </div>
  );
};

export default Map;
