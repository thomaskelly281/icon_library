import { mdiArrowLeftBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftBox(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftBox} {...props} />;
}

export { mdiArrowLeftBox as path };
