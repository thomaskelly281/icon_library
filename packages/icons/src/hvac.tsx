import { mdiHvac } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hvac(props: IconComponentProps) {
  return <Icon path={mdiHvac} {...props} />;
}

export { mdiHvac as path };
