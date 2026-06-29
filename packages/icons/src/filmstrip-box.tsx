import { mdiFilmstripBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilmstripBox(props: IconComponentProps) {
  return <Icon path={mdiFilmstripBox} {...props} />;
}

export { mdiFilmstripBox as path };
