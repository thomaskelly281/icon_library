import { mdiFanMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FanMinus(props: IconComponentProps) {
  return <Icon path={mdiFanMinus} {...props} />;
}

export { mdiFanMinus as path };
