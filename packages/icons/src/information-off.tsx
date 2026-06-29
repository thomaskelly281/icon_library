import { mdiInformationOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationOff(props: IconComponentProps) {
  return <Icon path={mdiInformationOff} {...props} />;
}

export { mdiInformationOff as path };
