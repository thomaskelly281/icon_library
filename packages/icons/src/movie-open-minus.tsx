import { mdiMovieOpenMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenMinus(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenMinus} {...props} />;
}

export { mdiMovieOpenMinus as path };
