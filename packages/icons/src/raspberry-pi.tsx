import { mdiRaspberryPi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RaspberryPi(props: IconComponentProps) {
  return <Icon path={mdiRaspberryPi} {...props} />;
}

export { mdiRaspberryPi as path };
