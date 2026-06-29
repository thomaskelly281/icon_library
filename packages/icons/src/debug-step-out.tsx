import { mdiDebugStepOut } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DebugStepOut(props: IconComponentProps) {
  return <Icon path={mdiDebugStepOut} {...props} />;
}

export { mdiDebugStepOut as path };
