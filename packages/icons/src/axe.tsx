import { mdiAxe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Axe(props: IconComponentProps) {
  return <Icon path={mdiAxe} {...props} />;
}

export { mdiAxe as path };
