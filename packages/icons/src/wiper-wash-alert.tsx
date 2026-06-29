import { mdiWiperWashAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WiperWashAlert(props: IconComponentProps) {
  return <Icon path={mdiWiperWashAlert} {...props} />;
}

export { mdiWiperWashAlert as path };
