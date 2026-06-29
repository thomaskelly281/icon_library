import { mdiNull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Null(props: IconComponentProps) {
  return <Icon path={mdiNull} {...props} />;
}

export { mdiNull as path };
