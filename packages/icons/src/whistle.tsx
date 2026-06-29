import { mdiWhistle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Whistle(props: IconComponentProps) {
  return <Icon path={mdiWhistle} {...props} />;
}

export { mdiWhistle as path };
