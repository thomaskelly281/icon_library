import { mdiTelevisionShimmer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TelevisionShimmer(props: IconComponentProps) {
  return <Icon path={mdiTelevisionShimmer} {...props} />;
}

export { mdiTelevisionShimmer as path };
