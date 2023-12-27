import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Kami menjual lebih dari sekadar pizza; kami memberikan pengalaman kuliner yang menggugah selera. Sambutlah kelezatan yang tak terlupakan di setiap potongan pizza kami
          </p>
          <p>Terjebak dalam kelezatan pizza kami yang memikat. Pilihlah dari beragam varian yang kami tawarkan dan nikmati pengalaman gastronomi yang tak terlupakan.</p>
          <p></p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            086253727382
          </a>
        </div>
      </section>
    </>
  )
}
