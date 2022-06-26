import React from 'react'
import { Typography, Button, Stack } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';



const Detail = ({ exerciseDetail }) => {
    const { name, description, bodyPart, target, equipment, gifUrl } = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant="h3" textTransform="capitalize">
                    {name}
                </Typography>
                <Typography variant="h6">
                    Exercises keep you strong. {name} {` `}
                    is one of the best exercises to target your {target}. It will help
                    you improve your mood and gain energy.
                </Typography>
                {
                    extraDetail.map((item, index) => (
                        <Stack key={index} direction="row" gap="24px" alignItems="center">
                            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '80px', height: '80px' }}>
                                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                            </Button>
                            <Typography textTransform="capitalize" variant="h5">
                                {item.name}
                            </Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default Detail