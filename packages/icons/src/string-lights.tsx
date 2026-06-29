import { mdiStringLights } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StringLights(props: IconComponentProps) {
  return <Icon path={mdiStringLights} {...props} />;
}

export { mdiStringLights as path };
