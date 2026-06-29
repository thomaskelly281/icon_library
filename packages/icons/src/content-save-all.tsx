import { mdiContentSaveAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveAll(props: IconComponentProps) {
  return <Icon path={mdiContentSaveAll} {...props} />;
}

export { mdiContentSaveAll as path };
