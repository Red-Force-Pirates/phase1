import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

import { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Crew() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500], border: "10px solid white", width: 100, height: 100 }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Stack>
  );
}


