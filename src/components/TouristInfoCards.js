import React from "react";

const citiesInfo = [
  {
    city_name: "glasgow",
    url: "https://peoplemakeglasgow.com/",
    img:
      "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/glasgow-scotland/overview/glasgow-scotland-aerial-view.jpg?$750x320$"
  },
  {
    city_name: "Manchester",
    url: "https://www.visitmanchester.com/",
    img: "https://diario16.com/wp-content/uploads/2019/04/Manchester.pg_.jpg"
  },
  {
    city_name: "London",
    url: "https://www.visitlondon.com/",
    img:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876"
  }
];

const TouristInfoCards = () => {
  return (
    <div>
      {citiesInfo.map(city => (
        <div className="card">
          <img src={city.img} alt="pic" className="card-img-top" />
          <div className="card-body">
            <p>
              as this is looking a beautiful place, you must have to visit this
            </p>
            <a href={city.url} target="_blank" className="btn btn-primary">
              Go to {city.city_name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
