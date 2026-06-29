import { mdiMovieMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieMinus(props: IconComponentProps) {
  return <Icon path={mdiMovieMinus} {...props} />;
}

export { mdiMovieMinus as path };
