import { mdiPassportCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PassportCheck(props: IconComponentProps) {
  return <Icon path={mdiPassportCheck} {...props} />;
}

export { mdiPassportCheck as path };
