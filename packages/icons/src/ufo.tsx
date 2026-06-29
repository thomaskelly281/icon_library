import { mdiUfo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ufo(props: IconComponentProps) {
  return <Icon path={mdiUfo} {...props} />;
}

export { mdiUfo as path };
