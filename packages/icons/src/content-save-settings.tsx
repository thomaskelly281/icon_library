import { mdiContentSaveSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveSettings(props: IconComponentProps) {
  return <Icon path={mdiContentSaveSettings} {...props} />;
}

export { mdiContentSaveSettings as path };
