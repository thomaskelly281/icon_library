import { mdiAmplifierOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AmplifierOff(props: IconComponentProps) {
  return <Icon path={mdiAmplifierOff} {...props} />;
}

export { mdiAmplifierOff as path };
