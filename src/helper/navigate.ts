export const handleScroll = (id: number) => {
  switch (id) {
    case 1:
      document.getElementById("home")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;

    case 2:
      document.getElementById("service")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;

    case 3:
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;

    case 4:
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      break;

    default:
      break;
  }
};
