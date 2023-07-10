import { useState } from "react";
import { Feed } from "../components";

const Explore = () => {
  const mockData = {
    All: [
      {
        content: "All Content",
      },
      {
        content: "All Content",
      },
    ],
    Trending: [
      {
        content:
          "Non programmers on my timeline. AttentionAfter placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
      },
    ],
    Technology: [
      {
        content:
          "Non programmers on my timeline. AttentionAfter placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
      },
    ],
    Sports: [
      {
        content:
          "Non programmers on my timeline. AttentionAfter placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
      },
    ],
    News: [
      {
        content:
          "Non programmers on my timeline. AttentionAfter placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.Interested in helping me build this course? Join the telegram group (in next tweet)",
      },
    ],
  };
  const [selectedData, setSelectedData] = useState("All");

  const handleClick = (data) => {
    setSelectedData(data);
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Explore</h1>
      {/* <div className="flex justify-between mt-4">
        {Object.keys(mockData).map((data) => (
          <button
            key={data}
            onClick={() => handleClick(data)}
            className="w-28 py-1 border-2 border-[#9A9A9A]"
          >
            {data}
          </button>
        ))}
      </div> */}

      {/* <ul>
        {mockData[selectedData].map((item, index) => (
          <li key={index}>{item.content}</li>
        ))}
      </ul> */}
      <iframe src="https://stackblitz.com/edit/stackblitz-starters-k4rjt4?embed=1&file=src%2FApp.tsx"
        style={{ width: "100%", height: "500px", border: '0', borderRadius: "4px", overflow: "hidden" }}
        title="testing"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

    </div >
  );
};

export default Explore;
