import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export const UserName = (props) => {
    return (
        <div>
            <style jsx>
                {`
                    span {
                        line-height: ${props.size};
                    }
                `}
            </style>
            <Stack direction="row" spacing={2}>
                <Avatar alt="user-icon" src="/images/mori.jpeg" sx={{ height: props.size, width: props.size}} />
                <span>モリモリ</span>
            </Stack>
        </div>
    )
}

