import { mdiLipstick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lipstick(props: IconComponentProps) {
  return <Icon path={mdiLipstick} {...props} />;
}

export { mdiLipstick as path };
