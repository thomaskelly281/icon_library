import { mdiMicrophone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Microphone(props: IconComponentProps) {
  return <Icon path={mdiMicrophone} {...props} />;
}

export { mdiMicrophone as path };
