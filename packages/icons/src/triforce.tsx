import { mdiTriforce } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Triforce(props: IconComponentProps) {
  return <Icon path={mdiTriforce} {...props} />;
}

export { mdiTriforce as path };
