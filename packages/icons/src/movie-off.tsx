import { mdiMovieOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOff(props: IconComponentProps) {
  return <Icon path={mdiMovieOff} {...props} />;
}

export { mdiMovieOff as path };
