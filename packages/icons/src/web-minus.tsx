import { mdiWebMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebMinus(props: IconComponentProps) {
  return <Icon path={mdiWebMinus} {...props} />;
}

export { mdiWebMinus as path };
