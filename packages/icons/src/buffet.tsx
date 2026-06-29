import { mdiBuffet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Buffet(props: IconComponentProps) {
  return <Icon path={mdiBuffet} {...props} />;
}

export { mdiBuffet as path };
