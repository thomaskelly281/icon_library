import { mdiProjectorScreen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProjectorScreen(props: IconComponentProps) {
  return <Icon path={mdiProjectorScreen} {...props} />;
}

export { mdiProjectorScreen as path };
