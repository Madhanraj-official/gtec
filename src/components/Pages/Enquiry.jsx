import React from "react";
import "../../Css/Enquiry.css";
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
function Enquiry() {
  const [Course, setCourse] = React.useState('');

  const handleChange = (event) => {
    setCourse(event.target.value);
  };
  const textfield={
    width:"70%",
    margin:"10px",

  }
  return (
    <>
      <div className="enquiry">
        <div className="leftwrap">
          <div className="btn-wrap">
            <i>
              <img src="images/enquire-icoc2.png" alt="enquiry" />
            </i>
            <h2>Enquiry Form</h2>
            <p>
              You can let us know what you think by posting your responses in
              the form or write a direct message to us at{" "}
            </p>
            <hr />
            <span className="fa">
              {" "}
              <img src="images/call-icon2.png" alt="" />{" "}
            </span>{" "}
            <a href="tel:9788884850">9788884850</a>
            <br />
          </div>
        </div>

        <form action="#" method="POST" id="enquirefom">
          <div className="rightwrap">
            <TextField size="large" sx={textfield} id="Name" label="Name*" variant="standard" />
            <TextField  sx={textfield} id="email" label="Email" variant="standard" />
            <TextField  sx={textfield} id="phone" label="Contact Number*" variant="standard" />




            <Box  sx={textfield} >
              <FormControl fullWidth>
                <InputLabel id="Course-label">Course</InputLabel>
                <Select
                  labelId="Course-label"
                  id="Course"
                  value={Course}
                  label="Course"
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
            <TextField  sx={textfield}  id="msg" label="Comments" variant="standard" />

            <div className="button-wrap">
              <input type="submit" className="send-btn" value="Send Message" />{" "}
            </div>
            <div id="errors"></div>
            <div id="successmsg_qk"></div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Enquiry;
