import { mdiRollerblade } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rollerblade(props: IconComponentProps) {
  return <Icon path={mdiRollerblade} {...props} />;
}

export { mdiRollerblade as path };
