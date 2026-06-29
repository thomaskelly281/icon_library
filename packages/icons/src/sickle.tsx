import { mdiSickle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sickle(props: IconComponentProps) {
  return <Icon path={mdiSickle} {...props} />;
}

export { mdiSickle as path };
