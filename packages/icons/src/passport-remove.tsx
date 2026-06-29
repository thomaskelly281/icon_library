import { mdiPassportRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PassportRemove(props: IconComponentProps) {
  return <Icon path={mdiPassportRemove} {...props} />;
}

export { mdiPassportRemove as path };
