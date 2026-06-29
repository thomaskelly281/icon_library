import { mdiPeace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Peace(props: IconComponentProps) {
  return <Icon path={mdiPeace} {...props} />;
}

export { mdiPeace as path };
