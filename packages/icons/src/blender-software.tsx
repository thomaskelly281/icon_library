import { mdiBlenderSoftware } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlenderSoftware(props: IconComponentProps) {
  return <Icon path={mdiBlenderSoftware} {...props} />;
}

export { mdiBlenderSoftware as path };
