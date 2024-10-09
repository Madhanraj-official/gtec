
import courseRunner from "../App.module.css"
const CourseRunner = ({ items, speed = 5000 }) => {
  return (
    <div className={courseRunner.itemInner}>
      <div className={courseRunner.wrapper}>
        <section style={{ "--speed": `${speed}ms` }}>
          {items.map(({ id, item}) => (
            <div className={courseRunner.item} key={id}>
              {/* <img src={image} alt={id} className={courseRunner.img}/> */}
            {item}
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {items.map(({ id, item}) => (
            <div className={courseRunner.item}key={id}>
              {/* <img src={image} alt={id} className={courseRunner.img}/> */}
            {item}
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {items.map(({ id, item}) => (
            <div className={courseRunner.image} key={id}>
              {/* <img src={image} alt={id} className={courseRunner.img}/> */}
            {item}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { CourseRunner };
