import { mdiToolbox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Toolbox(props: IconComponentProps) {
  return <Icon path={mdiToolbox} {...props} />;
}

export { mdiToolbox as path };
