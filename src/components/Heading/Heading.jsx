import css from "./Heading.module.css";
import clsx from "clsx";

const Heading = ({ title, top, bottom, tag: Tag = "h2" }) => {
  return (
    <Tag
      className={clsx(css.title, {
        [css.top]: top,
        [css.bottom]: bottom,
      })}
    >
      {title}
    </Tag>
  );
};

export default Heading;
