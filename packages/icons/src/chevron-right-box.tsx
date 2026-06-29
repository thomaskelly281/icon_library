import { mdiChevronRightBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronRightBox(props: IconComponentProps) {
  return <Icon path={mdiChevronRightBox} {...props} />;
}

export { mdiChevronRightBox as path };
