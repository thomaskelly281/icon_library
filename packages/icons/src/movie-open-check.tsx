import { mdiMovieOpenCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenCheck(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenCheck} {...props} />;
}

export { mdiMovieOpenCheck as path };
