import { mdiAmplifier } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Amplifier(props: IconComponentProps) {
  return <Icon path={mdiAmplifier} {...props} />;
}

export { mdiAmplifier as path };
