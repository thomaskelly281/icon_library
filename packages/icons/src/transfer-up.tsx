import { mdiTransferUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransferUp(props: IconComponentProps) {
  return <Icon path={mdiTransferUp} {...props} />;
}

export { mdiTransferUp as path };
