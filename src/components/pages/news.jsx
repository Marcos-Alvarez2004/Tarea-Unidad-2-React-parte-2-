import React from "react";

const news = () => {
  return (
    <article className="article-flex">
      <h2 className="title-news">New lacoste headquarters in Argentina!</h2>
      <iframe
        className="google-maps"
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d105169.8097425233!2d-58.775134518756005!3d-34.53946130864845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLacoste!5e0!3m2!1ses-419!2sar!4v1700590408676!5m2!1ses-419!2sar"
        width="400"
        height="300"
        loading="lazy"
      ></iframe>
    </article>
  );
};

export default news;
