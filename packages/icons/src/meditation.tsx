import { mdiMeditation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Meditation(props: IconComponentProps) {
  return <Icon path={mdiMeditation} {...props} />;
}

export { mdiMeditation as path };
