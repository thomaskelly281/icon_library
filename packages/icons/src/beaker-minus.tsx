import { mdiBeakerMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerMinus(props: IconComponentProps) {
  return <Icon path={mdiBeakerMinus} {...props} />;
}

export { mdiBeakerMinus as path };
