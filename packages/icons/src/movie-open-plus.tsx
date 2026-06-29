import { mdiMovieOpenPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenPlus(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenPlus} {...props} />;
}

export { mdiMovieOpenPlus as path };
