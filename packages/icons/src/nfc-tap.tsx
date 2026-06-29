import { mdiNfcTap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NfcTap(props: IconComponentProps) {
  return <Icon path={mdiNfcTap} {...props} />;
}

export { mdiNfcTap as path };
