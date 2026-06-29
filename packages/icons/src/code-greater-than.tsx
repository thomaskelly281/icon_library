import { mdiCodeGreaterThan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeGreaterThan(props: IconComponentProps) {
  return <Icon path={mdiCodeGreaterThan} {...props} />;
}

export { mdiCodeGreaterThan as path };
