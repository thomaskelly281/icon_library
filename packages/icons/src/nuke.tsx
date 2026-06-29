import { mdiNuke } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nuke(props: IconComponentProps) {
  return <Icon path={mdiNuke} {...props} />;
}

export { mdiNuke as path };
