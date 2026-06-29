import { mdiShuffleDisabled } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShuffleDisabled(props: IconComponentProps) {
  return <Icon path={mdiShuffleDisabled} {...props} />;
}

export { mdiShuffleDisabled as path };
