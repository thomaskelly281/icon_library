import { mdiContentSave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSave(props: IconComponentProps) {
  return <Icon path={mdiContentSave} {...props} />;
}

export { mdiContentSave as path };
