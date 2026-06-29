import { mdiVibrate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vibrate(props: IconComponentProps) {
  return <Icon path={mdiVibrate} {...props} />;
}

export { mdiVibrate as path };
