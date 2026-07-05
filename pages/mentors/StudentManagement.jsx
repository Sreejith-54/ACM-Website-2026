import React from 'react';
import { Box, Grid, Text, Flex } from '@chakra-ui/react';
import StudentCard from "./StudentCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Students = () => {
  const studentCards = [
    {
      src: "/anashwara.jpeg",
      name: "Anaswara A",
      position: "Chair",
      instagram: "https://www.instagram.com/anaswara_ani1?igsh=MXU5NWRranN1bXc5MQ==",
      linkedin: "https://www.linkedin.com/in/anaswara-anil-2403b3282/",
      github: " https://github.com/Atrnl"
    },
   
    {
      src: "/johan.png",
      name: "Sanjay Vishwkarma",
      position: "Vice Chair",
      instagram: "https://www.instagram.com/__sanjay_hs?igsh=MWFzMXRnODhsbzFwOA==",
      linkedin: "https://www.linkedin.com/in/sanjay-viswakarma-hs?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/ima-a"
    },
    {
      src: "/abhinav2.png",
      name: "Nishanth Devabathini",
      position: "Vice chair",
      instagram: "https://www.instagram.com/nishanth_1812/",
      linkedin: " https://www.linkedin.com/in/nishanthdevabathini/",
      github: " https://github.com/Nishanth1812"
    },
    {
      src: "/ananthan.png",
      name: "Punith Sai",
      position: "Treasurer",
      instagram: "https://www.instagram.com/punit_279_/",
      linkedin: " https://www.linkedin.com/in/punit-raveendran-805407321",
      github: "https://github.com/PunitRaveendran"
    },
    {
      src: "/keerthana.png",
      name: "Sreelaya Vinod",
      position: "Secretary & Media Lead",
      instagram: "https://www.instagram.com/__keerthana.gz?igsh=MTV6ZTQxZGszMmdjMg==",
      linkedin: "https://www.linkedin.com/in/keerthana-sai-gazula-4013b927a/",
      github: "https://github.com/KeerthanaG2"
    },
     {
      src: "/advyth1.png",
      name: "Petluri Sai Anand",
      position: "Web Master",
      instagram: "https://www.instagram.com/saianand.petluri?igsh=MTR3dXczYTNweTBldw==",
      linkedin: "https://www.linkedin.com/in/sai-anand-petluri-50194b333?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/Anand9876"
    },
    {
      src: "/advyth1.png",
      name: "Govardhan Satya",
      position: "AI Lead",
     instagram: "https://www.instagram.com/tycoongovardhan?igsh=cHlnbjg3MzUxeWoz",
      linkedin: "https://www.linkedin.com/in/govardhan-satya-gadi-95803b216p",
      github: "https://github.com/govardhansatya"
    },
      {
      src: "/advyth1.png",
      name: "Tenisha",
      position: "Cyber Lead",
      instagram: "https://www.instagram.com/advyth_vaman_akalankam/?igsh=MWwxNnkxY29rNXc0ZQ==",
      linkedin: "https://www.linkedin.com/in/advyth-vaman-akalankam/",
      github: "https://github.com/AdvythVaman05"
    },

    {
      src: "/shyam.png",
      name: "Sreejith M",
      position: "Web & App Dev Lead",
      instagram: "https://www.instagram.com/ghanasyaaam?igsh=MTg5MWpnNjJnajRjbg==",
      linkedin: "https://www.linkedin.com/in/ghanasyam-sunil-4b9339291/",
      github: "https://github.com/ghanasyaam"
    },
    {
      src: "/abhinavglitch.jpeg",
      name: "Mounish M",
      position: "Glitch Lead",
      instagram: "https://www.instagram.com/Moun7sh?igsh=MTM1b3Jsbm8yOXBrag==",
      linkedin: "https://www.linkedin.com/in/Mounish talluru?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Moun7sh"
    },
 
    {
      src: "/anashwara.jpeg",
      name: "Poonghozali",
      position: "Cyber Co-Lead",
      instagram: "https://www.instagram.com/anaswara_ani1?igsh=MXU5NWRranN1bXc5MQ==",
      linkedin: "https://www.linkedin.com/in/anaswara-anil-2403b3282/",
      github: " https://github.com/Atrnl"
    },
    {
      src: "/govardhan.jpeg",
      name: "Dande Mohith",
      position: "AI Co-Lead",
      instagram: "https://www.instagram.com/mohithzz_07?igsh=cHlnbjg3MzUxeWoz",
      linkedin: "https://www.linkedin.com/in/mohith-dande-01b58a371?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/Mohith1-stack"
    },
    {
      src: "/anirudh.png",
      name: "Meera Krishna",
      position: "Web Dev Co-Lead",
      instagram: "https://www.instagram.com/anirudhsuresh05?igsh=d3p3MDM0cjJwaDhp",
      linkedin: "https://www.linkedin.com/in/anirudh-suresh-5015b7328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Anirudh05bit"
    },
    {
      src: "/karthik.jpg",
      name: "B Rajmoth Reddy",
      position: "Core",
      instagram: "https://www.instagram.com/rajmohith_007",
      linkedin: "https://www.linkedin.com/in/RAJMOHITH REDDY BASIREDDY /",
      github: "https://github.com/rajmohith-reddy"
    },

    
 
  {
      src: "/karthik.jpg",
      name: "Semin A",
      position: "Core",
      instagram: "https://www.instagram.com/karthikkishor_kk",
      linkedin: "https://www.linkedin.com/in/karthikkishorkk/",
      github: "https://github.com/karthikkishorkk"
    },
    {
      src: "/anirudh.png",
      name: "Anirudh Suresh",
      position: "Core",
      instagram: "https://www.instagram.com/anirudhsuresh05?igsh=d3p3MDM0cjJwaDhp",
      linkedin: "https://www.linkedin.com/in/anirudh-suresh-5015b7328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Anirudh05bit"
    },
  ];

  const renderCards = () => {
    return studentCards.map((student, index) => (
      <Box key={index} p={4}>
        <StudentCard
          src={student.src}
          name={student.name}
          position={student.position}
          instagram={student.instagram}
          linkedin={student.linkedin}
          github={student.github}
          width={225}
          height={225}
          alignRight={false}
        />
      </Box>
    ));
  };

  return (
    <Flex flexDirection="column" alignItems="center" className=''>
      <Flex justifyContent="center" mb={3} pb={1} className="faculty-header">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 xl:mt-0"
        >
          <span className="text-accent">Core </span> Committee
        </motion.h2>
      </Flex>
      <Box
        width="100%"
        overflowY="auto"
        height={{ base: '50vh', lg: '65vh' }}
        className="backstudmanage"
        pb={50}
        css={{
          '&::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#4a4aa2',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#393970',
            borderRadius: '20px',
            border: '3px solid #1a1a2e',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#80fffb',
          },
        }}
      >
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={5}>
          {renderCards()}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Students;
