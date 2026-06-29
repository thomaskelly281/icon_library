import { mdiMovieOpenOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenOff(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenOff} {...props} />;
}

export { mdiMovieOpenOff as path };
