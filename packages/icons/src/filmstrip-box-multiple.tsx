import { mdiFilmstripBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilmstripBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiFilmstripBoxMultiple} {...props} />;
}

export { mdiFilmstripBoxMultiple as path };
