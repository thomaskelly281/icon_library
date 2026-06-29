import { mdiSafetyGoggles } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SafetyGoggles(props: IconComponentProps) {
  return <Icon path={mdiSafetyGoggles} {...props} />;
}

export { mdiSafetyGoggles as path };
