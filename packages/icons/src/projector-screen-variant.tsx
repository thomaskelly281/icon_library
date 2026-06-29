import { mdiProjectorScreenVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProjectorScreenVariant(props: IconComponentProps) {
  return <Icon path={mdiProjectorScreenVariant} {...props} />;
}

export { mdiProjectorScreenVariant as path };
