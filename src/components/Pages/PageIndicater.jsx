import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Box, Card, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive'


export default function PageIndiacter({ Content, slidesPerView }) {
    const isTablet = useMediaQuery({ query: '(max-width: 1354px)' })
    const isMobile = useMediaQuery({query:'(max-width:841px)'})
    return (
        <>
            
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    
                >
                    {Content.map((image) => <SwiperSlide style={{margin:"1rem"  }}>
                        <Card sx={{ height:"20rem", width: "80rem",padding:"5rem",boxShadow:"none"}} >
                            <CardMedia
                                sx={{ height: "100%", width: "60%" ,borderRadius:"10px",objectFit:"fill"}}
                                image={image}
                                component={"img"}
                                title={slidesPerView < 3 ?"Offer":"Mayiladuthurai"}
                            />
                        </Card>
                    </SwiperSlide>)}
                </Swiper>
        </>
    );
}
