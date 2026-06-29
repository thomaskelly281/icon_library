import { mdiMovieSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieSettings(props: IconComponentProps) {
  return <Icon path={mdiMovieSettings} {...props} />;
}

export { mdiMovieSettings as path };
