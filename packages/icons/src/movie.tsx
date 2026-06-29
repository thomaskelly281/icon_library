import { mdiMovie } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Movie(props: IconComponentProps) {
  return <Icon path={mdiMovie} {...props} />;
}

export { mdiMovie as path };
