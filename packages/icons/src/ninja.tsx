import { mdiNinja } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ninja(props: IconComponentProps) {
  return <Icon path={mdiNinja} {...props} />;
}

export { mdiNinja as path };
