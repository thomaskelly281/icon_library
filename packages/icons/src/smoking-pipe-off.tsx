import { mdiSmokingPipeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmokingPipeOff(props: IconComponentProps) {
  return <Icon path={mdiSmokingPipeOff} {...props} />;
}

export { mdiSmokingPipeOff as path };
