import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ShadowOps } from "../components/ShadowOps";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Meta } from "../components/Meta";

export function Home() {
  return (
    <>
      <Meta
        title="Cremsocial | No-BS Digital Marketing for SMBs & Creators"
        description="Toronto-based digital marketing for SMBs and creators. SEO, ads, social, websites, and shadow operating that actually drive leads and sales—no fluff, just results."
      />
      <Hero />
      <Services />
      <ShadowOps />
      <About />
      <Contact />
    </>
  );
}
