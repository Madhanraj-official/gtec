
import affilication from "../App.module.css"
const Affilication = ({ images, speed = 5000 }) => {
  return (
    <div className={affilication.inner}>
      <div className={affilication.wrapper}>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className={affilication.image} key={id}>
              <img src={image} alt={id} className={affilication.img}/>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className={affilication.image}key={id}>
              <img src={image} alt={id} className={affilication.img}/>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className={affilication.image} key={id}>
              <img src={image} alt={id} className={affilication.img}/>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Affilication };
