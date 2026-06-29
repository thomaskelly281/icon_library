import { mdiSelection } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Selection(props: IconComponentProps) {
  return <Icon path={mdiSelection} {...props} />;
}

export { mdiSelection as path };
