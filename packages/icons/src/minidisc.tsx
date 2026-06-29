import { mdiMinidisc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Minidisc(props: IconComponentProps) {
  return <Icon path={mdiMinidisc} {...props} />;
}

export { mdiMinidisc as path };
