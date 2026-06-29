import { mdiTagMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagMinus(props: IconComponentProps) {
  return <Icon path={mdiTagMinus} {...props} />;
}

export { mdiTagMinus as path };
