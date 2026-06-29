import { mdiApproximatelyEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApproximatelyEqual(props: IconComponentProps) {
  return <Icon path={mdiApproximatelyEqual} {...props} />;
}

export { mdiApproximatelyEqual as path };
