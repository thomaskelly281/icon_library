import { mdiCeilingLightMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CeilingLightMultiple(props: IconComponentProps) {
  return <Icon path={mdiCeilingLightMultiple} {...props} />;
}

export { mdiCeilingLightMultiple as path };
