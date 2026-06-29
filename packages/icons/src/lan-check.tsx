import { mdiLanCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanCheck(props: IconComponentProps) {
  return <Icon path={mdiLanCheck} {...props} />;
}

export { mdiLanCheck as path };
