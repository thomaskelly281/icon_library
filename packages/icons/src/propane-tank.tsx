import { mdiPropaneTank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PropaneTank(props: IconComponentProps) {
  return <Icon path={mdiPropaneTank} {...props} />;
}

export { mdiPropaneTank as path };
