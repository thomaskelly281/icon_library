import { mdiHeadphonesBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadphonesBox(props: IconComponentProps) {
  return <Icon path={mdiHeadphonesBox} {...props} />;
}

export { mdiHeadphonesBox as path };
