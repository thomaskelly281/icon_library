import { mdiPercentCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PercentCircle(props: IconComponentProps) {
  return <Icon path={mdiPercentCircle} {...props} />;
}

export { mdiPercentCircle as path };
