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
function Enquiry() {
  const [Course, setCourse] = React.useState('');

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const isTablet = useMediaQuery({ query: '(max-width:841px)' })
  const isMobilemid = useMediaQuery({ query: '(max-width:616px)' })
  const isMobile = useMediaQuery({ query: '(max-width:546px)' })
  const textfield = {
    width: "70%",
    margin: "10px",

  }
  const submit = (e) => {
    const formData = document.querySelector("enquirefom")
    e.preventdefault()
    const formDataModel = FormData(formData)
    console.log(formDataModel)
    fetch(
      "https://script.google.com/macros/s/AKfycbxmrTwouedlqilGm-7oUGf22pQVyBW-_SViP45ZCuNGeRVHV68sZ8DugScQSdC1jmSk4g/exec",
      { method: "POST", body: formDataModel }
    )
  }
  return (
    <>
      <Box component={"div"} className={isMobile ? "enquiry enquiry-mob" : isMobilemid ? "enquiry enquiry-mid" : isTablet ? "enquiry enquiry-tab" : "enquiry"}>
        <Box component={"div"} className="leftwrap">
          <Box component={"div"} className="btn-wrap">
            <Box component={"div"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Box component={"img"} padding={"2rem"} src={ApplicationIcon}></Box>            </Box>
            <Typography component={"p"} variant="h4">Enquiry Box</Typography>
            <Typography component={"p"} variant="p">
              You can let us know what you think by posting your responses in
              the Box or write a direct message to us at{" "}
            </Typography>
            <Box display={"flex"} justifyContent={"center"} >

              <CallIcon sx={{color:"white",width:"2.3rem",height:"2.3rem"}}/>
              <Typography component={"a"} color="white" href="tel:9788884850" fontSize={"1.5rem"} marginBottom={"2rem"}  display={"block"}>9788884850</Typography>
            </Box>

          </Box>
        </Box>

        <Box component={"form"} onSubmit={submit} className="enquirefom">
          <Box component={"div"} className="rightwrap">
            <TextField name="Name" size="large" sx={textfield} id="Name" label="Name*" variant="standard" />
            <TextField name="Email" sx={textfield} id="email" label="Email" variant="standard" />
            <TextField name="Contact" sx={textfield} id="phone" label="Contact Number*" variant="standard" />




            <Box component={"div"} sx={textfield} >
              <FormControl fullWidth>
                <InputLabel id="Course-label">Course</InputLabel>
                <Select
                  labelId="Course-label"
                  id="Course"
                  value={Course}
                  label="Course"
                  name="Course"
                  onChange={handleChange}
                  x={textfield}
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
              </FormControl>
            </Box>
            <TextField name="Comment" sx={textfield} id="msg" label="Comments" variant="standard" />

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

export default Enquiry;
