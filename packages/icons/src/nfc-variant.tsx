import { mdiNfcVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NfcVariant(props: IconComponentProps) {
  return <Icon path={mdiNfcVariant} {...props} />;
}

export { mdiNfcVariant as path };
