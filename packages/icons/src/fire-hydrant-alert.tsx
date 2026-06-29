import { mdiFireHydrantAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireHydrantAlert(props: IconComponentProps) {
  return <Icon path={mdiFireHydrantAlert} {...props} />;
}

export { mdiFireHydrantAlert as path };
