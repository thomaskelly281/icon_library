import { mdiPig } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pig(props: IconComponentProps) {
  return <Icon path={mdiPig} {...props} />;
}

export { mdiPig as path };
