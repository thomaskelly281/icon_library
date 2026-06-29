import { mdiCogOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogOff(props: IconComponentProps) {
  return <Icon path={mdiCogOff} {...props} />;
}

export { mdiCogOff as path };
