import { mdiArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiArrowLeft} {...props} />;
}

export { mdiArrowLeft as path };
