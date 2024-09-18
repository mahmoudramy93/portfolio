import { postsData } from "@/data/postsData";
import { CustomLink, CustomTitle } from "./common";
import Blog from "./Blog";

const LatestBlogs = () => {
  const blogPosts = postsData.map((post) => {
    return (
      <Blog
        key={post.id}
        title={post.title}
        date={post.date}
        comments={post.comments}
        image={post.image}
        description={post.description}
        link={post.link}
      />
    );
  });

  return (
    <section className="py-[60px] px-5  rounded-[50px]" id="latest_blogs">
      <div className="container">
        <CustomTitle title={"Blogs"} description={"This is my blogs"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {blogPosts}
        </div>
        <div>
          <CustomLink link={"/blogs"} text={"All Blogs"} />
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;