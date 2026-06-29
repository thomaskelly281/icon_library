import { mdiGestureTapButton } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureTapButton(props: IconComponentProps) {
  return <Icon path={mdiGestureTapButton} {...props} />;
}

export { mdiGestureTapButton as path };
