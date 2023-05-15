import Navbar from "@/components/Navbar/NavigationBar";
import React from "react";
import NavigationBar from "../../components/Navbar/NavigationBar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Process from "@/components/Process/Process";
import Facts from "@/components/Facts/Facts";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonial/Testimonial";
import Service from "@/components/Services/Service";
import Carousal from "@/components/Carousal/Crousal";
import getData from "@/lib/getData";
import { useTranslation } from "../i18n";

export default async function Home({ params: { lang } }) {
  const { t } = await useTranslation(lang);
  const data = await getData(lang);
  console.log({ homeData: data?.data?.attributes?.company?.contactInfo });
  const bannerData = data?.data?.attributes?.company?.Banner;
  const aboutData = data?.data?.attributes?.company?.about;
  const testimonials = data?.data?.attributes?.company?.testimonials;
  const serviceData = {
    data: data?.data?.attributes?.company?.services,
    serviceTitle: data?.data?.attributes?.company?.serviceTitle,
    serviceDescription: data?.data?.attributes?.company?.serviceDescription,
    serviceHeader: data?.data?.attributes?.company?.serviceHeader,
  };
  const contactInfo = data?.data?.attributes?.company?.contactInfo;
  const footerData = data?.data?.attributes?.company?.footer;
  const formData = {
    title: data?.data?.attributes?.company?.formTitle,
    formDesc: data?.data?.attributes?.company?.formDesc,
    fields: data?.data?.attributes?.company?.form,
  };
  return (
    <div className="mx-container">
      <NavigationBar data={contactInfo} lang={lang} />
      <Banner data={bannerData} />
      {/* <Process /> */}
      {/* <Facts /> */}
      <About data={aboutData} />
      <Service data={serviceData} />
      <Testimonials lang={lang} data={testimonials} />
      <Contact lang={lang} data={formData} />
      <Footer data={{ footerData: footerData, serviceData }} />
    </div>
  );
}
