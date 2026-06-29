import { mdiDivingScubaFlag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DivingScubaFlag(props: IconComponentProps) {
  return <Icon path={mdiDivingScubaFlag} {...props} />;
}

export { mdiDivingScubaFlag as path };
