import { mdiMovieOpenStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenStar(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenStar} {...props} />;
}

export { mdiMovieOpenStar as path };
