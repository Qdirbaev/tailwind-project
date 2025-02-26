const PostItems = ({ src, category, title, text, date }) => {
  return (
    <>
      <div>
        <img src={src} alt="post" />
        <div className="max-w-[355px] bg-white px-6 pt-6 pb-7">
          <a
            href="#"
            className="bg-[#E6F7FF] px-3 pt-0.5 pb-1 text-xs text-[var(--blue)]"
          >
            {category}
          </a>
          <h2 className="text-fraunces mt-2 mb-3 text-xl md:text-2xl leading-8">
            {title}
          </h2>
          <p className="mb-4 text-sm leading-5">{text}</p>
          <p className="text-xs">{date}</p>
        </div>
      </div>
    </>
  );
};

const Post = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center w-full items-stretch gap-8">
      {[
        {
          src: "/images/post-1.png",
          category: "Improvements",
          title: "Automating Daily Tasks from Your Phone",
          text: "Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.",
          date: "April 24, 2022",
        },
        {
          src: "/images/post-2.png",
          category: "Tips & Tricks",
          title: "Can You Automate Group Learning?",
          text: "Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.",
          date: "April 24, 2022",
        },
        {
          src: "/images/post-3.png",
          category: "News",
          title: "Our $3,000,000 B Round Investors",
          text: "Eos ipsum et est quis neque cum. Quis autem est eligendi amet animi eaque. Itaque minus illo delectus vel vitae dolores minus.",
          date: "April 24, 2022",
        },
      ].map((item, index) => (
        <PostItems
          key={index}
          src={item.src}
          category={item.category}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      ))}
    </div>
  );
};
export default Post;
