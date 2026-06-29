import { mdiMovieOpenSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenSettings(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenSettings} {...props} />;
}

export { mdiMovieOpenSettings as path };
