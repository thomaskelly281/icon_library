import { mdiCeilingFan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CeilingFan(props: IconComponentProps) {
  return <Icon path={mdiCeilingFan} {...props} />;
}

export { mdiCeilingFan as path };
