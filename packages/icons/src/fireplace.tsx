import { mdiFireplace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fireplace(props: IconComponentProps) {
  return <Icon path={mdiFireplace} {...props} />;
}

export { mdiFireplace as path };
