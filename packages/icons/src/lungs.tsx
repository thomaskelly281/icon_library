import { mdiLungs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lungs(props: IconComponentProps) {
  return <Icon path={mdiLungs} {...props} />;
}

export { mdiLungs as path };
