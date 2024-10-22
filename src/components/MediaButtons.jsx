import * as React from 'react';
import Button from '@mui/material/Button';

const MediaButtons = ({Pause, Resume, Reiniciar}) => {
  return (
    <div>
      <Button className='m-3' onClick={Pause} variant="outlined">Parar</Button>
      <Button className='m-3' onClick={Resume} variant="outlined">Resumir</Button>
      <Button className='m-3' onClick={Reiniciar} variant="outlined">Reiniciar</Button>
    </div>
  );
};

export default MediaButtons;