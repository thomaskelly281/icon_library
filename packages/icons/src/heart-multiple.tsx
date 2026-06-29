import { mdiHeartMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartMultiple(props: IconComponentProps) {
  return <Icon path={mdiHeartMultiple} {...props} />;
}

export { mdiHeartMultiple as path };
