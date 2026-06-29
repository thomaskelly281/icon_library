import { mdiHeadphonesOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadphonesOff(props: IconComponentProps) {
  return <Icon path={mdiHeadphonesOff} {...props} />;
}

export { mdiHeadphonesOff as path };
