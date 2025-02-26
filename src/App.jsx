const Feature = ({bgc, src, alt, title, text }) => {
      return (
        <>
          <div className="space-y-3 p-8 max-w-[355px]" style={{backgroundColor: bgc}}>
            <img src={src} alt={alt} />
            <h2 className="font-fraunces text-2xl">{title}</h2>
            <p className="max-w-[291px]">{text}</p>
          </div>
        </>
      );
    };
    export default Feature;

    