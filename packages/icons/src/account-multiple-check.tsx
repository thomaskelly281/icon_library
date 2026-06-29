import { mdiAccountMultipleCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMultipleCheck(props: IconComponentProps) {
  return <Icon path={mdiAccountMultipleCheck} {...props} />;
}

export { mdiAccountMultipleCheck as path };
