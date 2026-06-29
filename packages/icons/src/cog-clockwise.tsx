import { mdiCogClockwise } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogClockwise(props: IconComponentProps) {
  return <Icon path={mdiCogClockwise} {...props} />;
}

export { mdiCogClockwise as path };
