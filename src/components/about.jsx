const AboutItem = ({ src, title, text }) => {
  return (
    <>
      <div className="max-w-[222px] space-y-2">
        <img className="block max-lg:justify-center" src={src} alt="about-icon" />
        <h2 className="font-fraunces text-2xl">{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};
const About = () => {
  return (
    <div className="flex flex-wrap items-streflex-wrap justify-center gap-y-5 gap-2 ">
      {[
        {
          src: "/images/about-2.svg",
          title: "All on one place.",
          text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          src: "/images/about-2.svg",
          title: "Get daily alerts.",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        },
        {
          src: "/images/about-3.svg",
          title: "Safe and secure.",
          text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ].map((item, index) => (
        <AboutItem
          key={index}
          src={item.src}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};
export default About;
