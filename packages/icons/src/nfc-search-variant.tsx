import { mdiNfcSearchVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NfcSearchVariant(props: IconComponentProps) {
  return <Icon path={mdiNfcSearchVariant} {...props} />;
}

export { mdiNfcSearchVariant as path };
