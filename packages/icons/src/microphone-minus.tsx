import { mdiMicrophoneMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophoneMinus(props: IconComponentProps) {
  return <Icon path={mdiMicrophoneMinus} {...props} />;
}

export { mdiMicrophoneMinus as path };
