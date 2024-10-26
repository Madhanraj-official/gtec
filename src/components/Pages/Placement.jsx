import { Box, Typography ,TextField,Button} from '@mui/material'
import {useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import { TitleHook } from '../TitleHook'
import {useForm,Controller} from "react-hook-form"
import { useMediaQuery } from 'react-responsive'
import {CenterArea} from "/public/Course"

function Placement() {
  TitleHook("Placement")
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; 

  const listStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    
  }
  const textfieldStyle ={
    width:"70vw",
    marginTop:"2rem"
  }
  const isTablet = useMediaQuery({ query: '(max-width:1354px)' })
  const isMobile = useMediaQuery({ query: '(max-width:841px)' })
  return (
    <>
      <Box alignItems={"center"} justifyContent={"center"} display={"flex"} flexDirection={"column"} width={"100vw"}>
        <Typography variant='h2' component={"p"} margin={"2rem"}>Placement Registration Open for All</Typography>
        <Box>
          <Typography>Looking for your next big career move? <Typography component={"span"} variant='span' color='#2da5f5'>G TEC {CenterArea}</Typography> is excited to announce that placement registrations are now open for all students! Don’t miss this opportunity to connect with top companies and kickstart your dream career.</Typography>
          <Typography sx={{ color: "#2da5f5" }} variant='h2' component={"p"} margin={"2rem"}>What We Offer:</Typography>
          <ul style={{ marginLeft: "10rem", }}>
            <li><Typography sx={listStyle}>Job Placement Assistance</Typography> </li>
            <li><Typography sx={listStyle}>Interview Preparation</Typography></li>
            <li><Typography sx={listStyle}>Mack Interview</Typography></li>
          </ul>
          <Typography variant='h4' component={"p"} margin={"2rem"}>Secure your future with the right job—register now and take the first step towards your professional success!</Typography>
        </Box>
        <Box component="form" alignItems={"center"} justifyContent={"center"} display={"flex"} flexDirection={"column"} width={"100vw"} onSubmit={handleSubmit(onSubmit)}>
          <Controller name='Name' control={control} defaultValue="" rules={{required:"Name is required"}} render={({field})=>(<TextField id="outlined-basic" sx={textfieldStyle} {...field} label="Name*" variant="outlined" error={!!errors.Name} helperText={errors.Name ?errors.Name.message : ""} />)}/>
          <Controller name='Email' control={control} defaultValue="" rules={{required:"Email is required"}} render={({field})=>(<TextField id="outlined-basic" sx={textfieldStyle} {...field} label="Email*" variant="outlined" error={!!errors.Email} helperText={errors.Email ?errors.Email.message : ""} />)}/>
          <Controller name='Phone' control={control} defaultValue="" rules={{required:"Phone is required"}} render={({field})=>(<TextField id="outlined-basic" sx={textfieldStyle} {...field} label="Phone*" variant="outlined" error={!!errors.Phone} helperText={errors.Phone ?errors.Phone.message : ""} />)}/>
          <Controller name='Position' control={control} defaultValue="" rules={{required:"Apply For The Position  is required"}} render={({field})=>(<TextField id="outlined-basic" sx={textfieldStyle} {...field} label="Apply For The Position *" variant="outlined" error={!!errors.Position} helperText={errors.Position ?errors.Position.message : ""} />)}/>
          <Controller name='Experience' control={control} defaultValue=""  render={({field})=>(<TextField id="outlined-basic" sx={textfieldStyle} {...field} label="Total Year Experience" variant="outlined"  />)}/>
          <Controller name='Workplace1' control={control} defaultValue="" rules={{required:"Interest in Workplace 1  is required"}} render={({field})=>(<TextField id="outlined-basic" sx={textfieldStyle} {...field} label="Interest in Workplace 1 *" variant="outlined" error={!!errors.Workplace1} helperText={errors.Workplace1 ?errors.Workplace1.message : ""} />)}/>
          <Controller name='Workplace2' control={control} defaultValue="" rules={{required:"Interest in Workplace 2 is required"}} render={({field})=>(<TextField id="outlined-basic" sx={textfieldStyle} {...field} label="Interest in Workplace 2*" variant="outlined" error={!!errors.Workplace2} helperText={errors.Workplace2 ?errors.Workplace2.message : ""} />)}/>
          <Controller name='Cover' control={control} defaultValue="" rules={{required:"Cover Letter is required"}} render={({field})=>(<TextField id="outlined-basic" sx={textfieldStyle} {...field} label="Cover Letter*" variant="outlined" error={!!errors.Cover} helperText={errors.Cover ?errors.Cover.message : ""} />)}/>
          <Button variant={"contained"} sx={{width:isMobile?"25vw":"20vw",height:"10vh",paddingX:"20px",fontSize: isMobile?"0.8rem" : isTablet?"1.5rem":"2rem" ,margin:"3rem"}} className=""  type='submit' endIcon={<SendIcon/>}>Submit</Button>

          


        </Box>

      </Box>
    </>
  )
}

export default Placement