import { mdiNfc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nfc(props: IconComponentProps) {
  return <Icon path={mdiNfc} {...props} />;
}

export { mdiNfc as path };
