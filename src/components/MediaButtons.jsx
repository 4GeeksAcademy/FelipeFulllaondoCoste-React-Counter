import * as React from 'react';
import Button from '@mui/material/Button';

const MediaButtons = ({Pause, Resume, Reiniciar}) => {
  return (
    <div>
      <Button onClick={Pause} variant="outlined">Parar</Button>
      <Button onClick={Resume} variant="outlined">Resumir</Button>
      <Button onClick={Reiniciar} variant="outlined">Reiniciar</Button>
    </div>
  );
};

export default MediaButtons;