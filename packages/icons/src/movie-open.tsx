import { mdiMovieOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpen(props: IconComponentProps) {
  return <Icon path={mdiMovieOpen} {...props} />;
}

export { mdiMovieOpen as path };
