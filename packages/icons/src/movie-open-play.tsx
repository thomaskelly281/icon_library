import { mdiMovieOpenPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenPlay(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenPlay} {...props} />;
}

export { mdiMovieOpenPlay as path };
