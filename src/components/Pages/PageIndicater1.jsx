import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Card, CardMedia } from '@mui/material';
import { useMediaQuery } from 'react-responsive'

export default function SimpleSlider({ Content, slidesPerView }) {
    const isTablet = useMediaQuery({ query: '(max-width:1354px)' })
    const isMobile = useMediaQuery({ query: '(max-width:841px)' })
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        waitForAnimate: false
    };
    return (
        <Box overflow={"hidden"} width={"100vw"} >
            <Slider {...settings}>
                {Content.map((image) =>
                    <Box component={"center"}>
                        <Card sx={{ height: isMobile ? "20rem" : isTablet ? "30rem" :"40rem", width: isMobile ? "30rem" : isTablet ? "40rem": "70rem", }} >
                            <CardMedia
                                sx={{ height: "100%", width: "100%", objectFit: "fill" }}
                                image={image}
                                component={"img"}
                                title={slidesPerView < 3 ? "Offer" : "Mayiladuthurai"}
                            />
                        </Card>
                    </Box >
                )}
            </Slider>
        </Box>
    );
}