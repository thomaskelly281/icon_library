import { mdiFlagMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagMinus(props: IconComponentProps) {
  return <Icon path={mdiFlagMinus} {...props} />;
}

export { mdiFlagMinus as path };
