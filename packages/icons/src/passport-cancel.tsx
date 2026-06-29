import { mdiPassportCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PassportCancel(props: IconComponentProps) {
  return <Icon path={mdiPassportCancel} {...props} />;
}

export { mdiPassportCancel as path };
