import { createContext, useContext, useEffect, useRef } from 'react';

const RenderContext = createContext(null);

const RenderProvider = ({ children }) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) isFirstRender.current = false;
  }, []);

  return (
    <RenderContext.Provider value={isFirstRender.current}>
      {children}
    </RenderContext.Provider>
  );
};

export default RenderProvider;

export const useRenderContext = () => useContext(RenderContext);
