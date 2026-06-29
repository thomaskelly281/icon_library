import { mdiMovieStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieStar(props: IconComponentProps) {
  return <Icon path={mdiMovieStar} {...props} />;
}

export { mdiMovieStar as path };
