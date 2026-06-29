import { mdiStackpath } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stackpath(props: IconComponentProps) {
  return <Icon path={mdiStackpath} {...props} />;
}

export { mdiStackpath as path };
