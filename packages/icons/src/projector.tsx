import { mdiProjector } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Projector(props: IconComponentProps) {
  return <Icon path={mdiProjector} {...props} />;
}

export { mdiProjector as path };
