import { mdiBeakerRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerRemove(props: IconComponentProps) {
  return <Icon path={mdiBeakerRemove} {...props} />;
}

export { mdiBeakerRemove as path };
