import { mdiHookOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HookOff(props: IconComponentProps) {
  return <Icon path={mdiHookOff} {...props} />;
}

export { mdiHookOff as path };
