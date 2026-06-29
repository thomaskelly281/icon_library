import { mdiSlopeDownhill } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SlopeDownhill(props: IconComponentProps) {
  return <Icon path={mdiSlopeDownhill} {...props} />;
}

export { mdiSlopeDownhill as path };
