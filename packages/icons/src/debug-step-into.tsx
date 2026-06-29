import { mdiDebugStepInto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DebugStepInto(props: IconComponentProps) {
  return <Icon path={mdiDebugStepInto} {...props} />;
}

export { mdiDebugStepInto as path };
