import { mdiTransferLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransferLeft(props: IconComponentProps) {
  return <Icon path={mdiTransferLeft} {...props} />;
}

export { mdiTransferLeft as path };
