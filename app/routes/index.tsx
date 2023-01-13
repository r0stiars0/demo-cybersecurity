import { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/hero-section";
import MainTiles from "~/components/main-tiles";

export default function Index() {
  return (
    <>
    <HeroSection/>
    <MainTiles/>
    </>
  );
}

export const meta: MetaFunction = () => {

  return {
    title: "Aliya Demo Web",
    "og:title": "Aliya Demo Web",
    "og:description": "demo web Aliya Seruni Puti",
    "og:image": "https://security.byrontang.repl.co/htmlbestanden/stylesheets/imagesheets/groenetekst.jpeg",
    "og:type": "website",
    "og:url": "https://aliya-demo-web.netlify.app/",
  };
};