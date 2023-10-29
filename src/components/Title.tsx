import { Box, SxProps, Theme, Typography } from '@mui/material';

interface TitleProps {
  title: string;
  sub?: string;
  align?: 'center' | 'left' | 'right';
  sx?: SxProps<Theme>;
  color?: string;
}

export const Title = (props: TitleProps) => {
  const { title, sub, align, sx, color } = props;
  return (
    <Box sx={sx} textAlign={align || 'center'}>
      {sub && (
        <Typography
          lineHeight={1.2}
          fontFamily='Lobster, sans-serif'
          fontStyle={align === 'center' ? 'italic' : 'normal'}
          fontSize='2rem'
          color='secondary.main'
        >
          {sub}
        </Typography>
      )}
      <Typography color={color || 'primary.main'} lineHeight={1} fontWeight={700} fontSize='3.2rem' variant='h5'>
        {title}
      </Typography>
    </Box>
  );
};
