import { mdiNewBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NewBox(props: IconComponentProps) {
  return <Icon path={mdiNewBox} {...props} />;
}

export { mdiNewBox as path };
