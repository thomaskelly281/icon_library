import { mdiContentSaveCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveCheck(props: IconComponentProps) {
  return <Icon path={mdiContentSaveCheck} {...props} />;
}

export { mdiContentSaveCheck as path };
