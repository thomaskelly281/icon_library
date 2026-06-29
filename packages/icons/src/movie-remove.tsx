import { mdiMovieRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieRemove(props: IconComponentProps) {
  return <Icon path={mdiMovieRemove} {...props} />;
}

export { mdiMovieRemove as path };
