import React, { useEffect, useMemo } from 'react';

function App() {
  const markup = useMemo(
    () => document.querySelector('#legacy-portfolio-template').innerHTML,
    []
  );

  useEffect(() => {
    import('./main');
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}

export default App;
