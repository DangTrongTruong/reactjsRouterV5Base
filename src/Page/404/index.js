import React from 'react';
import notFoundImg from '../../assets/image/404.png';

export default function Error404() {
 

  return (
    <div style={{ textAlign: 'center', marginTop: 120 }}>
      <img width={100} src={notFoundImg} alt="404" />
      <p style={{ fontSize: 50, margin: 0 }}>404</p>
      <h2 style={{ margin: 0 }}>Page not found</h2>
      <p style={{ marginBottom: 0 }}>{'The Page you are looking for doesnt exists or another error occurred.'}</p>
      <p style={{ margin: 0 }}>{'Go hack, or head over to Scass Tech to choose a new direction.'}</p>
    </div>
  );
}
