import { mdiHeadphonesSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadphonesSettings(props: IconComponentProps) {
  return <Icon path={mdiHeadphonesSettings} {...props} />;
}

export { mdiHeadphonesSettings as path };
