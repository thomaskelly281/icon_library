import { mdiMovieOpenRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenRemove(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenRemove} {...props} />;
}

export { mdiMovieOpenRemove as path };
