import { mdiProjectorScreenOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProjectorScreenOff(props: IconComponentProps) {
  return <Icon path={mdiProjectorScreenOff} {...props} />;
}

export { mdiProjectorScreenOff as path };
