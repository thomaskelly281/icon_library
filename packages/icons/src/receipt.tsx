import { mdiReceipt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Receipt(props: IconComponentProps) {
  return <Icon path={mdiReceipt} {...props} />;
}

export { mdiReceipt as path };
