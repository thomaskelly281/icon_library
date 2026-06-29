import { mdiWashingMachine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WashingMachine(props: IconComponentProps) {
  return <Icon path={mdiWashingMachine} {...props} />;
}

export { mdiWashingMachine as path };
