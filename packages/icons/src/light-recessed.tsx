import { mdiLightRecessed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LightRecessed(props: IconComponentProps) {
  return <Icon path={mdiLightRecessed} {...props} />;
}

export { mdiLightRecessed as path };
