import { mdiCowOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CowOff(props: IconComponentProps) {
  return <Icon path={mdiCowOff} {...props} />;
}

export { mdiCowOff as path };
