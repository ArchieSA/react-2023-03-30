import { useCallback, useEffect, useState } from "react";

export const useActiveId = ({ initialActiveId, storageName }) => {
  const [activeId, setActiveId] = useState(initialActiveId);

  const setActiveIdWithCache = useCallback(
    (id) => {
      setActiveId(id);

      if (storageName) {
        localStorage.setItem(storageName, id);
      }
    },
    [storageName]
  );

  useEffect(() => {
    if (storageName) {
      const savedActiveId = localStorage.getItem(storageName);

      if (savedActiveId) {
        setActiveId(savedActiveId);
      }
    }
  }, []);

  return {
    activeId,
    setActiveId: setActiveIdWithCache,
  };
};
