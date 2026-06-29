import { mdiCommaBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommaBox(props: IconComponentProps) {
  return <Icon path={mdiCommaBox} {...props} />;
}

export { mdiCommaBox as path };
