import { mdiFireHydrantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireHydrantOff(props: IconComponentProps) {
  return <Icon path={mdiFireHydrantOff} {...props} />;
}

export { mdiFireHydrantOff as path };
