import { mdiBowArrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BowArrow(props: IconComponentProps) {
  return <Icon path={mdiBowArrow} {...props} />;
}

export { mdiBowArrow as path };
