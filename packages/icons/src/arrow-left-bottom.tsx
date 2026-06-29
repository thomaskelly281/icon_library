import { mdiArrowLeftBottom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftBottom(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftBottom} {...props} />;
}

export { mdiArrowLeftBottom as path };
