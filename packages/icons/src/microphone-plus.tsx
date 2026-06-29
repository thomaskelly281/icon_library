import { mdiMicrophonePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrophonePlus(props: IconComponentProps) {
  return <Icon path={mdiMicrophonePlus} {...props} />;
}

export { mdiMicrophonePlus as path };
