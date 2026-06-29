import { mdiAutoMode } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AutoMode(props: IconComponentProps) {
  return <Icon path={mdiAutoMode} {...props} />;
}

export { mdiAutoMode as path };
