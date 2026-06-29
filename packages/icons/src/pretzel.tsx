import { mdiPretzel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pretzel(props: IconComponentProps) {
  return <Icon path={mdiPretzel} {...props} />;
}

export { mdiPretzel as path };
