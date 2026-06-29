import { mdiRoundedCorner } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RoundedCorner(props: IconComponentProps) {
  return <Icon path={mdiRoundedCorner} {...props} />;
}

export { mdiRoundedCorner as path };
