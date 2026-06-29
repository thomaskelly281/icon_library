import { mdiNfcVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NfcVariantOff(props: IconComponentProps) {
  return <Icon path={mdiNfcVariantOff} {...props} />;
}

export { mdiNfcVariantOff as path };
