import { mdiEyedropper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Eyedropper(props: IconComponentProps) {
  return <Icon path={mdiEyedropper} {...props} />;
}

export { mdiEyedropper as path };
