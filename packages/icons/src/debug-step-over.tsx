import { mdiDebugStepOver } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DebugStepOver(props: IconComponentProps) {
  return <Icon path={mdiDebugStepOver} {...props} />;
}

export { mdiDebugStepOver as path };
