import { Container, SubTitle } from "../../../components/ui";

const SectionContact = () => {
  return (
    <Container>
      <SubTitle text={"Contact Us"} />

      <address className="flex flex-col md:flex-row justify-between items-start gap-8 not-italic">
        <p className="text-3xl font-bold uppercase text-text-2">
          St. Lima 500 <br /> Lima, Peru
        </p>

        <ul className="flex flex-col gap-4 text-text">
          <li className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold leading-none">Open Hour</h3>
            <p className="text-lg font-normal leading-none">
              10:00 a.m - 10:00 p.m
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold leading-none">Phone</h3>
            <p className="text-lg font-normal leading-none">+51 574-0282</p>
          </li>
          <li className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold leading-none">Email</h3>
            <p className="text-lg font-normal leading-none">
              chestbread@gmail.com
            </p>
          </li>
        </ul>
      </address>

      <div className="w-full rounded-sm overflow-hidden md:h-100">
        <iframe
          title="Chest Bread Location"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249743.68803786347!2d-76.98777915!3d-12.0266383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1774065865739!5m2!1ses-419!2spe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full aspect-video grayscale transition-all duration-300 ease-in-out hover:grayscale-0 md:aspect-auto"
        ></iframe>
      </div>
    </Container>
  );
};

export default SectionContact;
