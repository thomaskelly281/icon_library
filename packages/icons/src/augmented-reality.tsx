import { mdiAugmentedReality } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AugmentedReality(props: IconComponentProps) {
  return <Icon path={mdiAugmentedReality} {...props} />;
}

export { mdiAugmentedReality as path };
