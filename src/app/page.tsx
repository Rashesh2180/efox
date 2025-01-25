import AppPromo from "@/components/apppromo/AppPromo";
import ClinetReview from "@/components/clinetreview/ClinetReview";
import DestinationSelector from "@/components/destinationSelector/DestinationSelector";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ImageBanner from "@/components/imagebanner/ImageBanner";
import LatestPost from "@/components/latestpost/LatestPost";
import OfferSection from "@/components/offersection/OfferSection";
import WorkInfo from "@/components/workinfo/WorkInfo";
import "swiper/css";
import "swiper/css/pagination";
export default function Home() {
  return (
    <div className="">
      <Hero/>
      <DestinationSelector/>
      <WorkInfo/>
      <ImageBanner/>
      <OfferSection/>
      <ClinetReview/>
      <LatestPost/>
      <Faq/>
      <AppPromo/> 
      <Footer/>
    </div>
  );
}
