import { mdiMovieRoll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieRoll(props: IconComponentProps) {
  return <Icon path={mdiMovieRoll} {...props} />;
}

export { mdiMovieRoll as path };
