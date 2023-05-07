import { Layout } from "@/components/Layout/Layout";
import { ThemeContextProvider } from "@/contexts/ThemeContext/ThemeContextProvider";
import { store } from "@/store";
import "@/styles/globals.scss";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </Provider>
  );
}
