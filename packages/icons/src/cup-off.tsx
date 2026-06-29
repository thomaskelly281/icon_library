import { mdiCupOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CupOff(props: IconComponentProps) {
  return <Icon path={mdiCupOff} {...props} />;
}

export { mdiCupOff as path };
