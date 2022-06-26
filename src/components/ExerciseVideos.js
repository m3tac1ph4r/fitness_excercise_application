import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (exerciseVideos.length === 0)
        return <Loader />

    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
            <Typography variant="h3" mb="33px">
                Watch <span style={{ color: '#d90429', textTransform: "capitalize" }}>{name}</span> Exercise Videos
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap"
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '100px', xs: '0px' }
                }}
            >
                {exerciseVideos.length === 0 ? <Loader /> : exerciseVideos.slice(0, 3).map((item, index) => (
                    <a
                        key={index}
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        className='exercise-video'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant="h5" color="#000">
                                {/* {`${item.video.title.slice(0, 40)}...`} */}
                                {item.video.title.length <= 40 ? item.video.title.length
                                    : `${item.video.title.slice(0, 40)}...`}
                            </Typography>
                            <Typography variant="h6" color="#000">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos