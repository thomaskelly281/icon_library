import { mdiTransferDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransferDown(props: IconComponentProps) {
  return <Icon path={mdiTransferDown} {...props} />;
}

export { mdiTransferDown as path };
