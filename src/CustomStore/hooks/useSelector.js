import { StoreContext } from "@/CustomStore/StoreContext/StoreContext";
import { useContext, useEffect, useState } from "react";

export const useSelector = (selector) => {
  const store = useContext(StoreContext);
  const [value, setValue] = useState(() => selector(store.getState()));

  useEffect(() => {
    const callback = (value) => setValue(selector(value));

    store.subscribe(callback);

    return () => store.unsubscribe(callback);
  }, []);

  return value;
};
