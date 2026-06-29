import { mdiContentSaveMove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContentSaveMove(props: IconComponentProps) {
  return <Icon path={mdiContentSaveMove} {...props} />;
}

export { mdiContentSaveMove as path };
