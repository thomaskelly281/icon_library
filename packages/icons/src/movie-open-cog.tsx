import { mdiMovieOpenCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenCog(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenCog} {...props} />;
}

export { mdiMovieOpenCog as path };
