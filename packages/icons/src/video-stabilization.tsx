import { mdiVideoStabilization } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoStabilization(props: IconComponentProps) {
  return <Icon path={mdiVideoStabilization} {...props} />;
}

export { mdiVideoStabilization as path };
