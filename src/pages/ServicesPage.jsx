import ServiceList from "../assets/serviceList";
import "../assets/style/ServicesPage.css";

const ServicesPage = () => {
  const formatPrice = (price) => {
    if (typeof price === "number") return `${price}€`;
    return price;
  };

  const renderServices = () => {
    return ServiceList.map((service, index) => (
      <article
        key={service.id}
        className="service-row"
        data-reveal
        style={{ "--reveal-delay": `${Math.min(index * 45, 260)}ms` }}
      >
        <div className="service-copy">
          <h2 className="service-name">{service.name}</h2>
          {service.description ? (
            <p className="service-description">{service.description}</p>
          ) : null}
        </div>
        <div className="service-actions">
          <p className="service-price">{formatPrice(service.price)}</p>
        </div>
      </article>
    ));
  };

  return (
    <section className="page services-page" data-reveal>
      <div
        className="services-menu"
        data-reveal
        style={{ "--reveal-delay": "70ms" }}
      >
        <h1
          className="services-title"
          data-reveal
          style={{ "--reveal-delay": "120ms" }}
        >
          NOS TARIFS
        </h1>
        <div className="services-list">{renderServices()}</div>
      </div>
    </section>
  );
};

export default ServicesPage;
