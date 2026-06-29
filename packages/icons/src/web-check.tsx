import { mdiWebCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebCheck(props: IconComponentProps) {
  return <Icon path={mdiWebCheck} {...props} />;
}

export { mdiWebCheck as path };
