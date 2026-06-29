import { mdiMoviePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoviePlus(props: IconComponentProps) {
  return <Icon path={mdiMoviePlus} {...props} />;
}

export { mdiMoviePlus as path };
