import { mdiTransitionMasked } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransitionMasked(props: IconComponentProps) {
  return <Icon path={mdiTransitionMasked} {...props} />;
}

export { mdiTransitionMasked as path };
