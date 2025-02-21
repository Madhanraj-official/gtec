import React from "react";
import "../../Css/Enquiry.css";
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import { useMediaQuery } from 'react-responsive'
import { Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import ApplicationIcon from "../Images/application.png";
import { useForm, Controller } from "react-hook-form"
import { userId, EmailServiceId, FormTemplateForEnquiryForm } from '/public/Course'
import emailjs from "emailjs-com";

function Application() {
    const [Course, setCourse] = React.useState('');
    const handleChange = (event) => {
        setCourse(event.target.value);
    };
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm();
    const reloadPage = () => {
        window.location.reload();
    };
    const onSubmit = async (data) => {
        await (data['Mode'] = "Application Form")
        await emailjs.send(
            EmailServiceId,
            FormTemplateForEnquiryForm,
            data,
            userId)
        await reloadPage()
    };
    const isTablet = useMediaQuery({ query: '(max-width:841px)' })
    const isMobilemid = useMediaQuery({ query: '(max-width:616px)' })
    const isMobile = useMediaQuery({ query: '(max-width:546px)' })
    const textfield = {
        width: "70%",
        margin: "10px",
    }
    return (
        <>
            <Box component={"div"} className={isMobile ? "enquiry enquiry-mob" : isMobilemid ? "enquiry enquiry-mid" : isTablet ? "enquiry enquiry-tab" : "enquiry"}>
                <Box component={"div"} className="leftwrap">
                    <Box component={"div"} className="btn-wrap">
                        <Box component={"div"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Box component={"img"} padding={"1rem"} src={ApplicationIcon}></Box>            </Box>
                        <Typography component={"p"} variant="h4">Enquiry Form</Typography>
                        <Typography component={"p"} variant="p">
                            You can let us know what you think by posting your responses in
                            the Box or write a direct message to us at{" "}
                        </Typography>
                        <Box display={"flex"} justifyContent={"center"} >
                            <CallIcon sx={{ color: "white", width: "2.3rem", height: "2.3rem" }} />
                            <Typography component={"a"} color="white" href="tel:9788884850" fontSize={"1.5rem"} marginBottom={"2rem"} display={"block"}>9788884850</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box component={"form"} onSubmit={handleSubmit(onSubmit)} className="enquirefom">
                    <Box component={"div"} className="rightwrap">
                        <Controller name='Name' control={control} defaultValue="" rules={{ required: "Name is required" }} render={({ field }) => (<TextField name="Name" size="large" sx={textfield} label="Name*" variant="standard"  {...field} error={!!errors.Name} helperText={errors.Name ? errors.Name.message : ""} />)} />
                        <Controller name='Email' control={control} defaultValue="" rules={{ required: "Email is required" }} render={({ field }) => (<TextField name="Email" sx={textfield} label="Email" variant="standard"  {...field} error={!!errors.Email} helperText={errors.Email ? errors.Email.message : ""} />)} />
                        <Controller name='Contact' control={control} defaultValue="" rules={{ required: "Contact is required" }} render={({ field }) => (<TextField name="Contact" sx={textfield} label="Contact Number*" variant="standard"  {...field} error={!!errors.Contact} helperText={errors.Contact ? errors.Contact.message : ""} />)} />
                        <Box component={"div"} sx={textfield} >
                            <Controller name='Course' control={control} defaultValue="" rules={{ required: "Course is required" }} render={({ field }) => (<FormControl fullWidth>
                                <InputLabel id="Course-label">Course</InputLabel>
                                <Select
                                    labelId="Course-label"
                                    id="Course"
                                    value={Course}
                                    label="Course"
                                    name="Course"
                                    onChange={handleChange}
                                    x={textfield}
                                    {...field} error={!!errors.Course} helperText={errors.Course ? errors.Course.message : ""}
                                >
                                    <MenuItem value={"Accounting"}>Accounting</MenuItem>
                                    <MenuItem value={"SAP"}>SAP</MenuItem>
                                    <MenuItem value={"graphics &amp; web"}>
                                        Graphics &amp; Web Designing
                                    </MenuItem>
                                    <MenuItem value={"Multimedia &amp; animation"}>
                                        Multimedia &amp; Animation
                                    </MenuItem>
                                    <MenuItem value={"Interior &amp; Designing"}>
                                        Interior Designing
                                    </MenuItem>
                                    <MenuItem value={"CAD &amp; CAM"}>CAD &amp; CAM </MenuItem>
                                    <MenuItem value={"digital marketing"}>Digital Marketing</MenuItem>
                                    <MenuItem value={"Mobile Phone Technology"}>
                                        Mobile Phone Technology
                                    </MenuItem>
                                    <MenuItem value={"chip level &amp; cctv"}>Chip level / CCTV</MenuItem>
                                    <MenuItem value={"Software"} disabled={""}>
                                        Software
                                    </MenuItem>
                                    <MenuItem value={"data science"} disabled={""}>
                                        Data science
                                    </MenuItem>
                                    <MenuItem value={"Hardware"}>Hardware</MenuItem>
                                    <MenuItem value={"Networking"}>Networking</MenuItem>
                                    <MenuItem value={"Networking"}>Ethical Hacking</MenuItem>
                                    <MenuItem value={"English Training"}>English Training</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
                                </Select>
                            </FormControl>)} />
                        </Box>
                        <Controller name='Comment' control={control} defaultValue="" render={({ field }) => (<TextField name="Comment" sx={textfield} label="Comments" variant="standard"  {...field} error={!!errors.Comment} helperText={errors.Comment ? errors.Comment.message : ""} />)} />
                        <Box component={"div"} className="button-wrap">
                            <input type="submit" className="send-btn" value="Send Message" />{" "}
                        </Box>
                        <Box component={"div"} id="errors"></Box>
                        <Box component={"div"} id="successmsg_qk"></Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Application;
