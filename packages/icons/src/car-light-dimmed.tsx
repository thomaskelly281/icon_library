import { mdiCarLightDimmed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarLightDimmed(props: IconComponentProps) {
  return <Icon path={mdiCarLightDimmed} {...props} />;
}

export { mdiCarLightDimmed as path };
