import { mdiTransfer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Transfer(props: IconComponentProps) {
  return <Icon path={mdiTransfer} {...props} />;
}

export { mdiTransfer as path };
