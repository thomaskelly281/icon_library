import { mdiMovieOpenEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenEdit(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenEdit} {...props} />;
}

export { mdiMovieOpenEdit as path };
