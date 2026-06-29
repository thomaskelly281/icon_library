import { mdiMoviePlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoviePlay(props: IconComponentProps) {
  return <Icon path={mdiMoviePlay} {...props} />;
}

export { mdiMoviePlay as path };
