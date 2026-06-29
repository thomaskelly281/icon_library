import { mdiProjectorOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProjectorOff(props: IconComponentProps) {
  return <Icon path={mdiProjectorOff} {...props} />;
}

export { mdiProjectorOff as path };
