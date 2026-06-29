import { mdiFilmstripOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilmstripOff(props: IconComponentProps) {
  return <Icon path={mdiFilmstripOff} {...props} />;
}

export { mdiFilmstripOff as path };
