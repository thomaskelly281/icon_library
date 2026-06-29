import { mdiMixedReality } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MixedReality(props: IconComponentProps) {
  return <Icon path={mdiMixedReality} {...props} />;
}

export { mdiMixedReality as path };
