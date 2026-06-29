import { mdiTransferRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransferRight(props: IconComponentProps) {
  return <Icon path={mdiTransferRight} {...props} />;
}

export { mdiTransferRight as path };
