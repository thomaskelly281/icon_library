import { mdiDlna } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dlna(props: IconComponentProps) {
  return <Icon path={mdiDlna} {...props} />;
}

export { mdiDlna as path };
