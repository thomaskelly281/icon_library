import { mdiFilm } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Film(props: IconComponentProps) {
  return <Icon path={mdiFilm} {...props} />;
}

export { mdiFilm as path };
