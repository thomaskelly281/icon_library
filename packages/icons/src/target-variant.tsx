import { mdiTargetVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TargetVariant(props: IconComponentProps) {
  return <Icon path={mdiTargetVariant} {...props} />;
}

export { mdiTargetVariant as path };
