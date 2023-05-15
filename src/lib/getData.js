import instance from "./axiosInstance";

async function getData(lang) {
  try {
    const response = await instance.get(
      `xyz-company?populate[0]=company&populate[1]=company.Banner&populate[2]=company.Banner.logo&populate[3]=company.contactInfo&populate[4]=company.Banner.bannerImages&populate[5]=company.formFields&populate[6]=company.gallery&populate[7]=company.form&populate[8]=company.services&populate[10]=company.about&populate[11]=company.footer&locale=${lang}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getData;
