import { blog1 } from "@/data/blog";
import BlogRecentCard1 from "../card/BlogRecentCard1";

export default function RecentPost1() {
  const slicedData = blog1.slice(0, 3);
  const firstIndex = slicedData[0]?.id;
  const lastIndex = slicedData[slicedData.length - 1]?.id;

  return (
    <>
      <div className="sidebar-widget mb30 mt30">
        <h4 className="widget-title">Recent Posts</h4>
        {blog1.slice(0, 3).map((item,i) => (
          <BlogRecentCard1
            key={ i }
            data={item}
            index={{ firstIndex, lastIndex }}
          />
        ))}
      </div>
    </>
  );
}
