import { mdiCeilingFanLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CeilingFanLight(props: IconComponentProps) {
  return <Icon path={mdiCeilingFanLight} {...props} />;
}

export { mdiCeilingFanLight as path };
