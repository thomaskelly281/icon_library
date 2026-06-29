import { mdiMovieEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieEdit(props: IconComponentProps) {
  return <Icon path={mdiMovieEdit} {...props} />;
}

export { mdiMovieEdit as path };
