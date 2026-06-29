import { mdiShimmer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shimmer(props: IconComponentProps) {
  return <Icon path={mdiShimmer} {...props} />;
}

export { mdiShimmer as path };
