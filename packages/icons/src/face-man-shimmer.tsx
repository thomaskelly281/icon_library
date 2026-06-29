import { mdiFaceManShimmer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceManShimmer(props: IconComponentProps) {
  return <Icon path={mdiFaceManShimmer} {...props} />;
}

export { mdiFaceManShimmer as path };
