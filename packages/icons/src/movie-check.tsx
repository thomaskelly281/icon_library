import { mdiMovieCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieCheck(props: IconComponentProps) {
  return <Icon path={mdiMovieCheck} {...props} />;
}

export { mdiMovieCheck as path };
