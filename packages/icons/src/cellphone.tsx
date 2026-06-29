import { mdiCellphone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cellphone(props: IconComponentProps) {
  return <Icon path={mdiCellphone} {...props} />;
}

export { mdiCellphone as path };
