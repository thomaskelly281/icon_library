import { mdiSurfing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Surfing(props: IconComponentProps) {
  return <Icon path={mdiSurfing} {...props} />;
}

export { mdiSurfing as path };
