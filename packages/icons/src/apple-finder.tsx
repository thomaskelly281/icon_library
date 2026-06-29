import { mdiAppleFinder } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AppleFinder(props: IconComponentProps) {
  return <Icon path={mdiAppleFinder} {...props} />;
}

export { mdiAppleFinder as path };
