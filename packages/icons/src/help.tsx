import { mdiHelp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Help(props: IconComponentProps) {
  return <Icon path={mdiHelp} {...props} />;
}

export { mdiHelp as path };
