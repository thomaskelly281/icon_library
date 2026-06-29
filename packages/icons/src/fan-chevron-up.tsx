import { mdiFanChevronUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FanChevronUp(props: IconComponentProps) {
  return <Icon path={mdiFanChevronUp} {...props} />;
}

export { mdiFanChevronUp as path };
