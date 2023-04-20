import { useCallback, useLayoutEffect, useState } from "react";

/**
 * __Use only for client-side components!__
 * @returns `isTabsReady` returns `true` in a browser
 * @returns `activeTabId` returns active tab ID
 * @returns `setActiveTabWithCache()` activeTabId setter. Also saves activeTabId to localStorage
 */
export const useTabs = ({tabName, initialTabIndex = 0}) => {
  const [activeTabId, setActiveTab] = useState(initialTabIndex);
  const [isTabsReady, setTabsReady] = useState(false);

  const setActiveTabWithCache = useCallback((tabIndex) => {
    setActiveTab(tabIndex);
    if (tabName && tabName?.length > 0) {
      window?.localStorage?.setItem?.(tabName, tabIndex);
    }
  }, [tabName]);

  useLayoutEffect(() => {
    const savedActiveTabIndex = localStorage?.getItem?.(tabName);

    if (savedActiveTabIndex) {
      setActiveTab(savedActiveTabIndex);
    }

    setTabsReady(true);
  }, []);

  return { isTabsReady, activeTabId, setActiveTabWithCache };
};
