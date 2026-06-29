import { mdiShuffleVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShuffleVariant(props: IconComponentProps) {
  return <Icon path={mdiShuffleVariant} {...props} />;
}

export { mdiShuffleVariant as path };
