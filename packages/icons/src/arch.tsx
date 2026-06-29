import { mdiArch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Arch(props: IconComponentProps) {
  return <Icon path={mdiArch} {...props} />;
}

export { mdiArch as path };
