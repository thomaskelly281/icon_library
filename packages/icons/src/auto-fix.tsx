import { mdiAutoFix } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AutoFix(props: IconComponentProps) {
  return <Icon path={mdiAutoFix} {...props} />;
}

export { mdiAutoFix as path };
