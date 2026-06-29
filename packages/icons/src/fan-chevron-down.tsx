import { mdiFanChevronDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FanChevronDown(props: IconComponentProps) {
  return <Icon path={mdiFanChevronDown} {...props} />;
}

export { mdiFanChevronDown as path };
