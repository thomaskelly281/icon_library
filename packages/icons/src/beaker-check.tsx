import { mdiBeakerCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerCheck(props: IconComponentProps) {
  return <Icon path={mdiBeakerCheck} {...props} />;
}

export { mdiBeakerCheck as path };
