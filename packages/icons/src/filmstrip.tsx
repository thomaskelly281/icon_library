import { mdiFilmstrip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Filmstrip(props: IconComponentProps) {
  return <Icon path={mdiFilmstrip} {...props} />;
}

export { mdiFilmstrip as path };
