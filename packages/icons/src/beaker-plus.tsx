import { mdiBeakerPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerPlus(props: IconComponentProps) {
  return <Icon path={mdiBeakerPlus} {...props} />;
}

export { mdiBeakerPlus as path };
