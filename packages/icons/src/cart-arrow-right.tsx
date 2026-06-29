import { mdiCartArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartArrowRight(props: IconComponentProps) {
  return <Icon path={mdiCartArrowRight} {...props} />;
}

export { mdiCartArrowRight as path };
