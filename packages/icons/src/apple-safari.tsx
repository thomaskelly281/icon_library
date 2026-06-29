import { mdiAppleSafari } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AppleSafari(props: IconComponentProps) {
  return <Icon path={mdiAppleSafari} {...props} />;
}

export { mdiAppleSafari as path };
