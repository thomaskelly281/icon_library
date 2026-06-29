import { mdiLightbulb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lightbulb(props: IconComponentProps) {
  return <Icon path={mdiLightbulb} {...props} />;
}

export { mdiLightbulb as path };
