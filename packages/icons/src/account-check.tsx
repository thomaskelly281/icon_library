import { mdiAccountCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCheck(props: IconComponentProps) {
  return <Icon path={mdiAccountCheck} {...props} />;
}

export { mdiAccountCheck as path };
