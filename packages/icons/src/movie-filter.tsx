import { mdiMovieFilter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieFilter(props: IconComponentProps) {
  return <Icon path={mdiMovieFilter} {...props} />;
}

export { mdiMovieFilter as path };
