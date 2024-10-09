import React from "react";
import CourseCard from "../CoursesCard";
import { Affilication } from "../Affilication";
import { CourseRunner } from "../CourseRunner";
function Home() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const images = [
    "https://www.gteceducation.com/images/affiliations/nielit.jpg",
"https://www.gteceducation.com/images/affiliations/sap.jpg",
"https://www.gteceducation.com/images/affiliations/ms-oofice.jpg",
"https://www.gteceducation.com/images/affiliations/ec-council.jpg",
"	https://www.gteceducation.com/images/affiliations/iibi.jpg",
"https://www.gteceducation.com/images/affiliations/iab.jpg",
"https://www.gteceducation.com/images/affiliations/corel.jpg",
"https://www.gteceducation.com/images/affiliations/icdl.jpg",
"https://www.gteceducation.com/images/affiliations/interlinguae.jpg",
"	https://www.gteceducation.com/images/affiliations/keltron.jpg",
"https://www.gteceducation.com/images/affiliations/nios.jpg",
"	https://www.gteceducation.com/images/affiliations/ic3.jpg",
"	https://www.gteceducation.com/images/affiliations/prometric.jpg"
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));
  const items = [
<CourseCard title={"hai"} image={"/public/bg.jpg"} cardContent={"dcbkjvbckCBKBC"}/>,
<CourseCard title={"hai"} image={"/public/bg.jpg"} cardContent={"dcbkjvbckCBKBC"}/>,
<CourseCard title={"hai"} image={"/public/bg.jpg"} cardContent={"dcbkjvbckCBKBC"}/>,
<CourseCard title={"hai"} image={"/public/bg.jpg"} cardContent={"dcbkjvbckCBKBC"}/>,
<CourseCard title={"hai"} image={"/public/bg.jpg"} cardContent={"dcbkjvbckCBKBC"}/>,
  ].map((item) => ({
    id: crypto.randomUUID(),
    item
  }));
  return (
    <>
      <section style={{ height: "60vh" }}>
      {/* <div style={{maxHeight:"550px",width:"100vw",display:"flex",overflow:"hidden",scrollBehavior:"smooth"}}>
          {a.map((i) => (
            <CourseCard
            title={"hai"}
            image={"/public/bg.jpg"}
            cardContent={"dcbkjvbckCBKBC"}
          />
          ))}
        </div> */}

        {/* <div style={{maxHeight:"350px",width:"100vw",overflow:"hidden",scrollBehavior:"smooth"}}>
          {a.map((i) => (
            <Affilication image={"/public/bg.jpg"} />
          ))}
        </div> */}
        <section style={{maxHeight:"1000px",width:"100vw",display:"block",overflow:"hidden",scrollBehavior:"smooth"}}>
          <CourseRunner items={items} speed={30000} />
        </section>

     
      </section>
      <section style={{width:"100vw",display:"block"}}>
           <Affilication images={images} speed={15000} />
        </section>
    </>
  );
}

export default Home;
