import { mdiFireHydrant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireHydrant(props: IconComponentProps) {
  return <Icon path={mdiFireHydrant} {...props} />;
}

export { mdiFireHydrant as path };
