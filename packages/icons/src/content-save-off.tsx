import { mdiContentSaveOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveOff(props: IconComponentProps) {
  return <Icon path={mdiContentSaveOff} {...props} />;
}

export { mdiContentSaveOff as path };
