import { mdiMovieSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieSearch(props: IconComponentProps) {
  return <Icon path={mdiMovieSearch} {...props} />;
}

export { mdiMovieSearch as path };
