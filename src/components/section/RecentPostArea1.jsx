import { blog1 } from "@/data/blog";
import BlogCard1 from "../card/BlogCard1";

export default function RecentPostArea1() {
  return (
    <>
      <section className="bgc-thm3 pb90 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="00ms">
              <div className="main-title">
                <h2 className="title">Recent Blog</h2>
                <p className="paragraph">
                  See how you can up your career status
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            {blog1.slice(0, 4).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                <BlogCard1 data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
