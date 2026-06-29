import { mdiContentSaveAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveAlert(props: IconComponentProps) {
  return <Icon path={mdiContentSaveAlert} {...props} />;
}

export { mdiContentSaveAlert as path };
