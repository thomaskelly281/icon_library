import { mdiCrosshairsOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrosshairsOff(props: IconComponentProps) {
  return <Icon path={mdiCrosshairsOff} {...props} />;
}

export { mdiCrosshairsOff as path };
