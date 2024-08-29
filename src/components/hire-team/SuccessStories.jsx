import { assetsObj } from "@/utils/Images";
import { map } from "lodash";
import { Card, Stack } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";

const SuccessStories = () => {
  const options = {
    stagePadding: 80,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
    nav: false,
    dots: false,
  };
  const options2 = {
    stagePadding: 80,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
    nav: false,
    dots: false,
  };

  const data = [
    {
      id: 1,
      name: "Adem Recher",
      avatar: assetsObj.avatar5,
      designation: "Paython Developer",
      desc: `“Zixisoft made our hiring process seamless. We found highly skilled engineers within days, saving us both time and effort.”`,
      background_color: "#F4F5FF",
      avatar_bg_color: "#E3E4E6",
    },
    {
      id: 2,
      name: "Adem Recher",
      avatar: assetsObj.avatar5,
      designation: "CEO at InnovateTech",
      desc: `“Zixisoft made our hiring process seamless. We found highly skilled engineers within days, saving us both time and effort.”`,
      background_color: "#FFF3F0",
      avatar_bg_color: "#E3E4E6",
    },
    {
      id: 1,
      name: "Adem Recher",
      avatar: assetsObj.avatar5,
      designation: "Director of Operations at NexGen IT",
      desc: `“Zixisoft made our hiring process seamless. We found highly skilled engineers within days, saving us both time and effort.”`,
      background_color: "#FFF0FF",
      avatar_bg_color: "#E3E4E6",
    },
    {
      id: 1,
      name: "Adem Recher",
      avatar: assetsObj.avatar5,
      designation: "Paython Developer",
      desc: `“Zixisoft made our hiring process seamless. We found highly skilled engineers within days, saving us both time and effort.”`,
      background_color: "#FFFCF0",
      avatar_bg_color: "#E3E4E6",
    },
    {
      id: 1,
      name: "Adem Recher",
      avatar: assetsObj.avatar5,
      designation: "Paython Developer",
      desc: `“Zixisoft made our hiring process seamless. We found highly skilled engineers within days, saving us both time and effort.”`,
      background_color: "#FFF3F0",
      avatar_bg_color: "#E3E4E6",
    },
  ];
  return (
    <>
      <section className="success_stories_section">
        <h3 className="text-center">
          Why Employers Rely on Us—Read Their Success Stories!
        </h3>
        <p className="body1 text-center mb-5">
          Discover why leading employers trust us for their hiring needs. Our
          success stories showcase how we deliver exceptional talent and results
          every time.
        </p>
        <OwlCarousel
          className="owl-theme mb-5"
          loop
          margin={30}
          autoPlay={true}
          {...options}
        >
          {map(data, (item, i) => (
            <Card
              className="guarantee_card"
              style={{ background: item.background_color }}
              key={i}
            >
              <Card.Body>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div
                    className="img_wrapper"
                    style={{ background: item.avatar_bg_color }}
                  >
                    <img
                      src={assetsObj.avatar5}
                      alt="icons"
                      className="w-100 h-100"
                    />
                  </div>
                  <div>
                    <h6>{item.name}</h6>
                    <p className="body1 mb-0 text_dark_light">
                      {item.designation}
                    </p>
                  </div>
                </div>
                <p className="text_dark_light body1 mb-4">{item.desc}</p>
                <Stack
                  direction="horizontal"
                  className="align-items-cente rating_wrapper"
                  gap={2}
                >
                  {map([1, 2, 3, 4, 5], (_, i) => (
                    <i class="bi bi-star-fill" key={i}></i>
                  ))}
                </Stack>
              </Card.Body>
            </Card>
          ))}
        </OwlCarousel>
        <OwlCarousel
          className="owl-theme section"
          loop
          margin={30}
          autoPlay={true}
            {...options2}
        >
          {map(data, (item, i) => (
            <Card
              className="guarantee_card"
              style={{ background: item.background_color }}
              key={i}
            >
              <Card.Body>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div
                    className="img_wrapper"
                    style={{ background: item.avatar_bg_color }}
                  >
                    <img
                      src={assetsObj.avatar5}
                      alt="icons"
                      className="w-100 h-100"
                    />
                  </div>
                  <div>
                    <h6>{item.name}</h6>
                    <p className="body1 mb-0 text_dark_light">
                      {item.designation}
                    </p>
                  </div>
                </div>
                <p className="text_dark_light body1 mb-4">{item.desc}</p>
                <Stack
                  direction="horizontal"
                  className="align-items-cente rating_wrapper"
                  gap={2}
                >
                  {map([1, 2, 3, 4, 5], (_, i) => (
                    <i class="bi bi-star-fill" key={i}></i>
                  ))}
                </Stack>
              </Card.Body>
            </Card>
          ))}
        </OwlCarousel>
      </section>
    </>
  );
};

export default SuccessStories;
