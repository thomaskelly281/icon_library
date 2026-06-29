import { mdiGreaterThan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GreaterThan(props: IconComponentProps) {
  return <Icon path={mdiGreaterThan} {...props} />;
}

export { mdiGreaterThan as path };
