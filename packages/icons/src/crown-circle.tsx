import { mdiCrownCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrownCircle(props: IconComponentProps) {
  return <Icon path={mdiCrownCircle} {...props} />;
}

export { mdiCrownCircle as path };
