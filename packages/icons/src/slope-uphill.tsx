import { mdiSlopeUphill } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SlopeUphill(props: IconComponentProps) {
  return <Icon path={mdiSlopeUphill} {...props} />;
}

export { mdiSlopeUphill as path };
